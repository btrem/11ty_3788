/**
 * project defaults
 */
export const config = {
    dir: {
        input: "src",
    },
};

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {

    /**
     * test shortcode
     *
     * @param {number} [num=1]
     * @returns {number}
     */
    eleventyConfig.addShortcode("test", function (num = 1) {
        console.log(`${this.page.inputPath} => type: ${typeof (num)}; value: ${num}`);
        return `type: ${typeof(num)}; value: ${num}`;
    });

};
