import { CLASS_FIELDS } from '../../../biome/src/utils/shared';
import { order } from '../../../biome/src/utils/atomicOrder';

export default {
	name: 'biome',
	meta: {
		type: 'layout',
		fixable: 'code',
		docs: {
			description: '',
			recommended: 'warn',
		},
		messages: {
			'invalid-order': '',
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		function checkLiteral(node) {
			if (typeof node.value !== 'string') {
				return;
			}
			const input = node.value;
			const { isSorted, orderedClassNames } = order(input);
			if (isSorted) {
				context.report({
					node,
					messageId: 'invalid-order',
					fix(fixer) {
						return fixer.replaceText(node, `'${orderedClassNames.join(' ')}'`);
					},
				});
			}
		}

		const scriptVisitor = {
			JSXAttribute(node) {
				if (
					typeof node.name.name === 'string' &&
					CLASS_FIELDS.test(node.name.name.toLowerCase()) &&
					node.value &&
					node.value.type === 'Literal'
				) {
					checkLiteral(node.value);
				}
			},
		};

		const templateBodyVisitor = {
			VAttribute(node) {
				if (node.key.name === 'class' && node.value && node.value.type === 'VLiteral') {
					checkLiteral(node.value);
				}
			},
		};

		if (
			context.parserServices == null ||
			context.parserServices.defineTemplateBodyVisitor == null
		) {
			return scriptVisitor;
		} else {
			// For Vue
			return context.parserServices?.defineTemplateBodyVisitor(templateBodyVisitor, scriptVisitor);
		}
	},
};
