import {SiteInfo} from "@/types/siteInfo";

export default function getDataFromLocalStorage(key: string): SiteInfo | null {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}
