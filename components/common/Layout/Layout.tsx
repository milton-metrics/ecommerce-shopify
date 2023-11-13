import { FunctionComponent, PropsWithChildren } from 'react';
import s from './Layout.module.css';
 
const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <>
          <div className={s.root}>
            <main className="fit">
                { children }
            </main>
          </div>
        </>
    )
}

export default Layout