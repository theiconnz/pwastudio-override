import React, { Fragment } from 'react';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Footer/footer.module.css';

import CmsBlockFooter from '@magento/venia-ui/lib/components/CmsBlock';

const Footer = props => {
    const { links } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();
    const { copyrightText } = talonProps;

    return (
        <footer data-cy="Footer-root" className={classes.root}>
            <div className={classes.footerContainer}>
                <div className={classes.footerLinks}>
                    <CmsBlockFooter identifiers={'cms_block_footer'}/>
                </div>
                <div className={classes.copyright}>{copyrightText}</div>
            </div>
        </footer>
    );
};

export default Footer;
