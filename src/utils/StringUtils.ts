
export class StringUtils {

    static sanitizeString = (value: string): string => {
        if (value && value.length > 0) {
            return value.replace(/([^a-zA-Z0-9_-]+)/, "")
        }
        return "";
    }

}