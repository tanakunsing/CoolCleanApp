import Header from './Header';
import Menu from './Menu';
import Stytled from './Layout.module.css';

function Layout({ header, children }) {

    return (
        <>
            <div>
                <div className='mb-5'>
                    <Menu />
                </div>

                <div>
                <Header header={header} />
                </div>

                <div>
                    {children}
                </div>


                <footer className={Stytled.footer_do}>
                    <div>Policy Notice | Cookie Notice</div>
                    <div>© 2021 Magic Software Thailand Corp.,Ltd.</div>
                    <div>By Tanakunsingkhen</div>
                </footer>
            </div>
        </>
    );

}
export default Layout;