declare namespace NodeJS {
  export interface ProcessEnv {
    /**
     * The port of the API endpoint
     */
    readonly API_PORT: number

    /**
     * The port of the website served by Next.js
     */
    readonly NEXT_PORT: number

    /**
     * The public API URL
     */
    readonly NEXT_PUBLIC_API_URL: string

    /**
     * The local API URL
     */
    readonly API_URL: string

    /**
     * The URL of the MongoDB instance
     */
    readonly MONGO_URL: string

    /**
     * The secret used to access the backend data
     */
    readonly PAYLOAD_SECRET_KEY: string

    /**
     * The URL of the website served by Next.js
     */
    readonly NEXT_URL: string

    /**
     * The email address used for the dev database.
     * Only available in development mode.
     */
    readonly DEV_EMAIL?: string

    /**
     * The password used for the dev database.
     * Only available in development mode.
     */
    readonly DEV_PASSWORD?: string
  }
}
