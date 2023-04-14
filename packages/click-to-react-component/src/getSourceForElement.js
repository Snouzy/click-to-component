import { getReactInstancesForElement } from './getReactInstancesForElement.js'
import { getReactInstanceForElement } from './getReactInstanceForElement.js'
import { getSourceForInstance } from './getSourceForInstance.js'

/**
 * @typedef {import('react-reconciler').Fiber} Fiber
 */

export function getSourceForElement(
  /**
   * @type {HTMLElement}
   */
  element
) {
  console.log("ok")
  const instance = getReactInstanceForElement(element);
  const source = getSourceForInstance(instance);

  if (source) return source;

  console.warn("tamere")
  console.warn("Couldn't find a React instance for the element", element);
  console.info('Let us try to find a React instance ancestor which has a source');
  const instances = getReactInstancesForElement(element);
  for (const ins of instances) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const source = getSourceForInstance(ins);
    if (source) return source;
  }
}