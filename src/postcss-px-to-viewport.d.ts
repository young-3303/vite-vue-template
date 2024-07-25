declare module 'postcss-px-to-viewport' {
    interface Options {
        unitToConvert?: string;
        viewportWidth?: number;
        unitPrecision?: number;
        propList?: string[];
        viewportUnit?: string;
        fontViewportUnit?: string;
        selectorBlackList?: string[];
        minPixelValue?: number;
        mediaQuery?: boolean;
        replace?: boolean;
        exclude?: Array<RegExp | string>;
        landscape?: boolean;
        landscapeUnit?: string;
        landscapeWidth?: number;
    }

    const postcssPxToViewport: (options?: Options) => any;

    export default postcssPxToViewport;
}
