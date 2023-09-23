/**
 * CSS类名的优先级列表
 * @type {(string[])[]}
 */
const orderList = [
	'container',
	'peer',
	'group',
	'static',
	'fixed',
	'absolute',
	'relative',
	'sticky',
	'top',
	'right',
	'bottom',
	'left',
	'inset',
	'visible',
	'invisible',
	'z',
	'w',
	'max-w',
	'min-w',
	'h',
	'max-h',
	'min-h',
	'aspect',
	'block',
	'inline-block',
	'inline',
	'flex',
	'inline-flex',
	'table',
	'inline-table',
	'table-caption',
	'table-cell',
	'table-column',
	'table-column-group',
	'table-footer-group',
	'table-header-group',
	'table-row-group',
	'table-row',
	'flow-root',
	'inline-grid',
	'contents',
	'list-item',
	'hidden',
	'basis',
	'shrink',
	'grow',
	'flex-1',
	'flex-auto',
	'flex-initial',
	'flex-none',
	'flex-row',
	'flex-row-reverse',
	'flex-col',
	'flex-col-reverse',
	'flex-wrap',
	'flex-wrap-reverse',
	'flex-nowrap',
	'justify-items',
	'justify-self',
	'content-center',
	'content-start',
	'content-end',
	'content-between',
	'content-around',
	'content-evenly',
	'justify',
	'items',
	'self',
	'grid',
	'grid-cols',
	'col-auto',
	'col-span',
	'grid-rows',
	'row-auto',
	'row-span',
	'grid-flow-row',
	'grid-flow-col',
	'grid-flow-dense',
	'grid-flow-row-dense',
	'grid-flow-col-dense',
	'auto-cols',
	'auto-rows',
	'gap',
	'gap-x',
	'gap-y',
	'place-items',
	'place-content',
	'place-self',
	'p',
	'pa',
	'px',
	'py',
	'pt',
	'pr',
	'pb',
	'pl',
	'm',
	'ma',
	'mx',
	'my',
	'mt',
	'mr',
	'mb',
	'ml',
	'text',
	'text-left',
	'text-center',
	'text-right',
	'text-justify',
	'text-start',
	'text-end',
	'text-xs',
	'text-sm',
	'text-base',
	'text-lg',
	'text-xl',
	'text-2xl',
	'text-3xl',
	'text-4xl',
	'text-5xl',
	'text-6xl',
	'text-7xl',
	'text-8xl',
	'text-9xl',
	'color',
	'antialiased',
	'subpixel-antialiased',
	'font',
	'fw',
	'font-thin',
	'font-extralight',
	'font-light',
	'font-normal',
	'font-medium',
	'font-semibold',
	'font-bold',
	'font-extrabold',
	'font-black',
	'line-height',
	'lh',
	'leading',
	'space-x',
	'space-y',
	'float',
	'clear',
	'isolate',
	'isolation-auto',
	'translate-x',
	'translate-y',
	'scale',
	'rotate',
	'skew-x',
	'skew-y',
	'origin',
	'object-contain',
	'object-cover',
	'object-fill',
	'object-none',
	'object-scale-down',
	'object',
	'overflow',
	'overflow-x',
	'overflow-y',
	'of',
	'of-x',
	'of-y',
	'overscroll',
	'order',
	'break-before',
	'break-after',
	'break-inside',
	'box-decoration-break',
	'whitespace',
	'ws',
	'italic',
	'not-italic',
	'normal-nums',
	'ordinal',
	'slashed-zero',
	'lining-nums',
	'oldstyle-nums',
	'prportional-nums',
	'tabular-nums',
	'diagonal-fractions',
	'stacked-fractions',
	'tracking',
	'list',
	'list-inside',
	'list-outside',
	'uppercase',
	'lowercase',
	'capitalize',
	'normal-case',
	'truncate',
	'text-ellipsis',
	'text-clip',
	'underline',
	'overline',
	'line-through',
	'no-underline',
	'decoration',
	'decoration-solid',
	'decoration-double',
	'decoration-dotted',
	'decoration-dashed',
	'decoration-wavy',
	'decoration-auto',
	'decoration-from-font',
	'decoration-0',
	'decoration-1',
	'decoration-2',
	'decoration-4',
	'decoration-8',
	'underline-offset',
	'indent',
	'break',
	'align',
	'content',
	'content-none',
	'opacity',
	'bg',
	'bg-none',
	'bg-gradient-to',
	'bg-repeat',
	'bg-no-repeat',
	'bg-repeat-x',
	'bg-repeat-y',
	'bg-repeat-round',
	'bg-repeat-space',
	'bg-bottom',
	'bg-center',
	'bg-left',
	'bg-left-bottom',
	'bg-left-top',
	'bg-right',
	'bg-right-bottom',
	'bg-right-top',
	'bg-top',
	'bg-auto',
	'bg-cover',
	'bg-contain',
	'bg-fixed',
	'bg-local',
	'bg-scroll',
	'bg-clip-border',
	'bg-clip-padding',
	'bg-clip-content',
	'bg-clip-text',
	'bg-origin-border',
	'bg-origin-padding',
	'bg-origin-content',
	'mix-blend',
	'bg-blend',
	'fill',
	'stroke',
	'stroke-0',
	'stroke-1',
	'stroke-2',
	'border',
	'border-solid',
	'border-dashed',
	'border-dotted',
	'border-double',
	'border-hidden',
	'border-none',
	'border-0',
	'border-2',
	'border-4',
	'border-8',
	'b',
	'border-x',
	'border-y',
	'border-t',
	'border-r',
	'border-b',
	'border-l',
	'rd',
	'rounded',
	'box',
	'divide-x',
	'divide-y',
	'divide',
	'divide-solid',
	'divide-dashed',
	'divide-dotted',
	'divide-double',
	'divide-none',
	'outline-0',
	'outline-1',
	'outline-2',
	'outline-4',
	'outline-8',
	'outline',
	'outline-none',
	'outline-dashed',
	'outline-dotted',
	'outline-double',
	'outline-hidden',
	'outline-offset',
	'ring-inset',
	'ring-0',
	'ring-1',
	'ring-2',
	'ring-4',
	'ring-8',
	'ring',
	'ring-offset-0',
	'ring-offset-1',
	'ring-offset-2',
	'ring-offset-4',
	'ring-offset-8',
	'ring-offset',
	'shadow',
	'shadow-sm',
	'shadow-md',
	'shadow-lg',
	'shadow-xl',
	'shadow-2xl',
	'shadow-inner',
	'shadow-none',
	'shadow',
	'table-auto',
	'table-fixed',
	'blur',
	'brightness',
	'contrast',
	'drop-shadow',
	'grayscale',
	'hue-rotate',
	'invert',
	'saturate',
	'sepia',
	'selection',
	'backdrop',
	'backdrop-blur',
	'backdrop-brightness',
	'backdrop-contrast',
	'backdrop-grayscale',
	'backdrop-hue-rotate',
	'backdrop-invert',
	'backdrop-opacity',
	'backdrop-saturate',
	'backdrop-sepia',
	'transition',
	'duration',
	'ease-linear',
	'ease-in',
	'ease-out',
	'ease-in-out',
	'delay',
	'animate',
	'accent',
	'appearance-none',
	'cursor',
	'caret',
	'pointer-events-none',
	'pointer-events-auto',
	'resize',
	'scroll-auto',
	'scroll-smooth',
	'scroll-p',
	'scroll-px',
	'scroll-py',
	'scroll-pt',
	'scroll-pr',
	'scroll-pb',
	'scroll-pl',
	'scroll-m',
	'scroll-mx',
	'scroll-my',
	'scroll-mt',
	'scroll-mr',
	'scroll-mb',
	'scroll-ml',
	'snap-start',
	'snap-end',
	'snap-center',
	'snap-align-none',
	'snap-normal',
	'snap-always',
	'scroll',
	'touch',
	'select',
	'will-change',
	'sr-only',
	'not-sr-only',
	'hover',
	'focus',
	'focus-within',
	'focus-visible',
	'active',
	'visited',
	'target',
	'first',
	'last',
	'only',
	'odd',
	'even',
	'first-of-type',
	'last-of-type',
	'only-of-type',
	'empty',
	'disabled',
	'enabled',
	'checked',
	'interminate',
	'default',
	'required',
	'valid',
	'invalid',
	'in-range',
	'out-of-range',
	'placeholder-shown',
	'autofill',
	'read-only',
	'open',
	'before',
	'after',
	'first-letter',
	'first-line',
	'marker',
	'file',
	'placeholder',
	'rtl',
	'ltr',
	'xs',
	'sm',
	'md',
	'2md',
	'lg',
	'2lg',
	'xl',
	'2xl',
	'3xl',
	'max-sm',
	'max-md',
	'max-lg',
	'max-xl',
	'max-2xl',
	'dark',
	'portrait',
	'landscape',
	'motion-safe',
	'motion-reduce',
	'motion-more',
	'contrast-less',
	'print',
	'supports-',
	'aria-checked',
	'aria-disabled',
	'aria-expanded',
	'aria-hidden',
	'aria-pressed',
	'aria-readonly',
	'aria-required',
	'aria-selected',
	'data-',
];
/**
 * @param classArr
 */
export function sanitizeNode(classArr) {
	if (!classArr || !classArr.length) {
		return [];
	}

	classArr = Array.from(new Set(Array.isArray(classArr) ? classArr : classArr.split(' ')));
	classArr = classArr.filter(Boolean).map(elem => {
		return elem.replace(/\r?\n|\r/g, '');
	});
	return classArr;
}

/**
 * @param className
 * @param at
 */
export function stripString(className, at) {
	if (!className || !className.includes(at)) {
		return null;
	}
	return className.substr(0, className.lastIndexOf(at));
}

/**
 * 存储已计算的类名优先级的缓存
 * @type {Map<string, number>}
 */
const priorityCache = new Map();

/**
 * 计算CSS类名的优先级
 * @param {string} className - 要计算优先级的CSS类名
 * @param {number} iteration - 递归迭代次数
 * @param {boolean} checkCache - 是否检查缓存
 * @returns {number} CSS类名的优先级
 */

function getClassPriority(className, iteration = 0, checkCache = true) {
	if (checkCache && priorityCache.has(className)) {
		return priorityCache.get(className);
	}

	if (iteration === 0) {
		className = className.replace(/\[.*]/, '[value]').replace(/^-/, '').replace('!', '');

		if (className.includes(':')) {
			return getPrefixClassPriority(className);
		}
	}

	const strippedClassName = stripString(className, '-');
	let priority = 0;

	if (strippedClassName) {
		priority = getClassPriority(strippedClassName, iteration + 1, false);
	} else {
		const classPrio = orderList.findIndex(elem => elem === className);
		if (classPrio !== -1) {
			priority = classPrio;
		}
	}

	// 将结果添加到缓存
	priorityCache.set(className, priority);
	return priority;
}

/**
 * 计算带有前缀的CSS类名的优先级
 * @param {string} className - 要计算优先级的CSS类名
 * @returns {number} 带有前缀的CSS类名的优先级
 */
function getPrefixClassPriority(className) {
	const splitClassName = className.split(':');
	const amountPrio = splitClassName.length - 1;
	return (
		getClassPriority(splitClassName[0]) +
		amountPrio / 100 +
		getClassPriority(splitClassName[splitClassName.length - 1]) / 100000
	);
}

/**
 * 对CSS类名进行排序
 * @param {string[]} classNames - 要排序的CSS类名数组
 * @returns {{ isSorted: boolean, orderedClassNames: string[] }} 排序结果对象
 */
function order(classNames) {
	classNames = sanitizeNode(classNames);
	if (classNames.length < 2) {
		return {
			isSorted: false,
			orderedClassNames: classNames,
		};
	}
	classNames.sort((a, b) => {
		const aPrio = getClassPriority(a);
		const bPrio = getClassPriority(b);
		return aPrio - bPrio;
	});
	return {
		isSorted: classNames.join(' ') !== classNames.join(' '),
		orderedClassNames: classNames,
	};
}
export { order };
