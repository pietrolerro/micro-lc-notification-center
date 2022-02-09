/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ClickStrategies, MicroLcHeaders } from "./components/notification-center/micro-lc-notification-center";
import { PartialTranslations } from "./lib/utils/i18n.utils";
export namespace Components {
    interface MicroLcNotificationCenter {
        /**
          * `allowExternalHrefs (optional) defaults to false. When true, notification links can browse to external web pages and href are not checked to ensure they are relative to self-website
         */
        "allowExternalHrefs": boolean;
        /**
          * `clickStrategy` (optional) is an enum taking values 'default' | 'href' | 'replace' | 'push' which correspond to what happens when a notification is clicked. Default and href do create an `anchor` and click it. `replace` triggers the location replace while `push` pushes onto window.history stack
         */
        "clickStrategy": ClickStrategies;
        /**
          * `endpoint` (optional) is the http client url to fetch notifications. It defaults to relative ref: `/api/v1/micro-lc-notification-center`. It can also be used as a plain attribute by setting ```html <body>   <micro-lc-notification-center     endpoint="https://example.com/my-notifications"   ></micro-lc-notification-center> </body> ```
         */
        "endpoint": string;
        /**
          * `headers` (optional) is a key-value list of http headers to attach to the http client that fetches notifications
         */
        "headers": MicroLcHeaders;
        /**
          * `limit` (optional) controls pagination limit while fetching notifications. It is also an HTML attribute.
         */
        "limit": number;
        /**
          * `limitQueryParam (optional) defaults to 'limit' and it's the query parameter which controls notification pagination page size while fetching data
         */
        "limitQueryParam": string;
        /**
          * `locales` (optional) is a key-value list to allow i18n support. Keys are paired to either a string, which overrides language support or to a key-value map that matches a language to a translation  ```javascript const locales = {   title: 'A Title',   subtitle: {     en: 'A i18n subtitle',     'it-IT': 'Un sottotitolo internazionalizzato'   } } ```
         */
        "locales": PartialTranslations;
        /**
          * `pushStateKey (optional) defaults to 'micro-lc-notification-center' and it's the key used to scope the content callback context in window.history.state when clickStrategy is 'push'. Otherwise it is neglected
         */
        "pushStateKey": string;
        /**
          * `limitQueryParam (optional) defaults to 'limit' and it's the query parameter which controls notification pagination skip while fetching data
         */
        "skipQueryParam": string;
    }
}
declare global {
    interface HTMLMicroLcNotificationCenterElement extends Components.MicroLcNotificationCenter, HTMLStencilElement {
    }
    var HTMLMicroLcNotificationCenterElement: {
        prototype: HTMLMicroLcNotificationCenterElement;
        new (): HTMLMicroLcNotificationCenterElement;
    };
    interface HTMLElementTagNameMap {
        "micro-lc-notification-center": HTMLMicroLcNotificationCenterElement;
    }
}
declare namespace LocalJSX {
    interface MicroLcNotificationCenter {
        /**
          * `allowExternalHrefs (optional) defaults to false. When true, notification links can browse to external web pages and href are not checked to ensure they are relative to self-website
         */
        "allowExternalHrefs"?: boolean;
        /**
          * `clickStrategy` (optional) is an enum taking values 'default' | 'href' | 'replace' | 'push' which correspond to what happens when a notification is clicked. Default and href do create an `anchor` and click it. `replace` triggers the location replace while `push` pushes onto window.history stack
         */
        "clickStrategy"?: ClickStrategies;
        /**
          * `endpoint` (optional) is the http client url to fetch notifications. It defaults to relative ref: `/api/v1/micro-lc-notification-center`. It can also be used as a plain attribute by setting ```html <body>   <micro-lc-notification-center     endpoint="https://example.com/my-notifications"   ></micro-lc-notification-center> </body> ```
         */
        "endpoint"?: string;
        /**
          * `headers` (optional) is a key-value list of http headers to attach to the http client that fetches notifications
         */
        "headers"?: MicroLcHeaders;
        /**
          * `limit` (optional) controls pagination limit while fetching notifications. It is also an HTML attribute.
         */
        "limit"?: number;
        /**
          * `limitQueryParam (optional) defaults to 'limit' and it's the query parameter which controls notification pagination page size while fetching data
         */
        "limitQueryParam"?: string;
        /**
          * `locales` (optional) is a key-value list to allow i18n support. Keys are paired to either a string, which overrides language support or to a key-value map that matches a language to a translation  ```javascript const locales = {   title: 'A Title',   subtitle: {     en: 'A i18n subtitle',     'it-IT': 'Un sottotitolo internazionalizzato'   } } ```
         */
        "locales"?: PartialTranslations;
        /**
          * `pushStateKey (optional) defaults to 'micro-lc-notification-center' and it's the key used to scope the content callback context in window.history.state when clickStrategy is 'push'. Otherwise it is neglected
         */
        "pushStateKey"?: string;
        /**
          * `limitQueryParam (optional) defaults to 'limit' and it's the query parameter which controls notification pagination skip while fetching data
         */
        "skipQueryParam"?: string;
    }
    interface IntrinsicElements {
        "micro-lc-notification-center": MicroLcNotificationCenter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "micro-lc-notification-center": LocalJSX.MicroLcNotificationCenter & JSXBase.HTMLAttributes<HTMLMicroLcNotificationCenterElement>;
        }
    }
}
