import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: "33ogiiz7p97p",
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        host: "preview.contentful.com",
    });

    const getModules = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "module",
                select: "fields",
            });
            const sanitizedEntries = entries.items.map((item) => {
                const chapters = item.fields.chapter.content;

                return {
                    ...item.fields,
                };
            });
            return sanitizedEntries;
            
        } catch (error) {
            console.log(`error fetching Modules: ${error}`);
            
        }
    }
    return { getModules };
}

export default useContentful;