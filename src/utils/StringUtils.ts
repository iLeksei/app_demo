
export class StringUtils {

    static sanitizeString = (value: string): string => {
        if (value && value.length > 0) {
            return value.replace(/([^a-zа-яА-ЯёЁA-Z0-9_-\s]+)/, "")
        }
        return "";
    }

}