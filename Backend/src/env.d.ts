declare global {
    namespace NodeJS {
        interface ProcessEnv {
            USERNAME: string
            PASSWORD: string
            DBUSERNAME: string
            DBPASSWORD: string
        }
    }
}

export {}