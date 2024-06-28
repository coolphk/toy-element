import type {App, Plugin} from 'vue'

type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
    console.log('makeInstaller', components)
    return (app: App) => {
        components.forEach((c) => {
            app.use(c)
        })
    }
}

export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any)?.name || "UnnamedComponent";
        app.component(name, component as SFCWithInstall<T>);
    };
    console.log('withInstall')
    return component as SFCWithInstall<T>;
};