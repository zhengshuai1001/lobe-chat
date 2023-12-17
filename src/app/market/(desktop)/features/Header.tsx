import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';

// import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  // const { styles } = useStyles();

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          {/* <Logo className={styles.logo} extra={'Discover'} size={36} type={'text'} /> */}
          <h3 style={{ color: '#080808', fontSize: '22px', fontWeight: 'bold', marginBottom: '0' }}>
            Chatbot / Discover
          </h3>
        </Link>
      }
      // right={<ShareAgentButton />}
    />
  );
});

export default Header;
