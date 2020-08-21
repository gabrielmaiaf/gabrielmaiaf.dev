import React, { ReactNode } from 'react';
import { withTranslation } from '../src/helpers/i18n';
import { NextPageContext } from 'next';

interface ErrorPage {
  statusCode?: number;
  t: (arg0: string, arg1?: any) => ReactNode;
}

const Error = ({ statusCode, t }: ErrorPage) => (
  <p>
    {statusCode
      ? t('error-with-status', { statusCode })
      : t('error-without-status')
    }
  </p>
);

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  let statusCode = null;
  if (res)
    ({ statusCode } = res);

  else if (err)
    ({ statusCode } = err);

  return {
    namespacesRequired: ['common'],
    statusCode,
  }
}

export default withTranslation('common')(Error);