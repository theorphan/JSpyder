import {Arrays} from "Algorithms/Arrays";
import {JSRegistry} from "Registry/JSRegistry";

const REGEX_DOM_TAG = /(^\\\<|\<)/g;
const HTML_ELEMENT_EXISTS = "object" === typeof window["HTMLElement"];

export class DOMElement {
    /**
     * Converts arbitrary data into a DOM node that JSpyder
     * can use.
     * 
     * Profile: O(n), Q(1)
     * 
     * @return {Array}
     */
    static toElement(source) {
        if (DOMElement.isElement(source)) {
            return [source];
        }
        else if ("string" === typeof source) {
            if (DOMElement.isDomString(source)) {
                return DOMElement.parseHtmlAsNodes(source);
            }
            else {
                return DOMElement.querySelectorAll(source);
            }
        }
        else {
            return Arrays.Slice(source);
        }
    }

    /**
     * @return {boolean}
     */
    static isElement(element) {
        if (element) {
            if (HTML_ELEMENT_EXISTS && element instanceof window["HTMLElement"]) {
                return true;
            }
            else if ("object" === typeof element
                && element["nodeType"] === 1
                && "string" === typeof element["nodeName"]) {
                return true;
            }
        }
        return false;
    }

    /**
     * Determines if the string provided can be used to create
     * a DOM node.
     * 
     * @return {boolean}
     */
    static isDomString(source) {
        if ("string" !== typeof source) {
            return false;
        }

        var match = source.match(REGEX_DOM_TAG);

        return (match !== null) && (match.indexOf('<') > -1);
    }

    /**
     * Profile: O(n)
     * 
     * @return {Array}
     */
    static parseHtmlAsNodes(source) {
        let div = window["document"].createElement("div");
        div["innerHTML"] = source;
        return Arrays.Slice(div["children"], 0);
    }
    
    /**
     * Profile: O(n)
     * 
     * @return {Array}
     */
    static querySelectorAll(selector, parent = window["document"]) {
        return Arrays.Slice(parent.querySelectorAll(selector));
    }
    
    /**
     * Attaches a registry to the defined element, if a registry
     * has been created; otherwise, exits early.
     */
    static attachRegistry(element) {
        if(!element.__jsRegistry) {
            element.__jsRegistry = new JSRegistry().GetInterface();
        }
    }
}
