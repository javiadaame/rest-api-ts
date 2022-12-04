import { Router } from "express"
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router();


/**
 * Clean the extension file
 * @param fileName string - File name
 * @return string - File name without extension 
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

/* Get file names of folder, and use it */
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)

    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`[ROUTES] Load "${cleanName}" route.`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router }