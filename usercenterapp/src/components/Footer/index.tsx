import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import {VIOLET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'violetRcl出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'VIOLET EVER-GARDEN',
          title: '紫罗兰永恒花园',
          href: VIOLET_LINK,
          blankTarget: true,
        },
        {
          key: 'violet',
          title: '薇尔莉特',
          href: 'https://www.bilibili.com/bangumi/play/ss40028?spm_id_from=333.337.0.0&from_spmid=666.25.series.0',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> violetRcl Github</>,
          href: 'https://github.com/violetrcl',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
