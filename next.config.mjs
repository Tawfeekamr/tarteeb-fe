/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/(.*)", // Matches all API routes
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Origin", value: "https://tarteeb-cms.payloadcms.app/api" },
                    { key: "Access-Control-Allow-Origin", value: "https://tarteeb-cms.payloadcms.app" }, // Replace with the actual origin you want to allow
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,POST,PUT,DELETE" }, // Allowed HTTP methods (adjust as needed)
                    { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" }, // Allowed headers (adjust as needed)
                ],
            },
        ];
    },
};

export default nextConfig;
