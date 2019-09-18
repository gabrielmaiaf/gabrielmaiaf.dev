import React, { Component } from 'react';

import { withTranslation } from '../src/helpers/i18n';

type Props = {
  statusCode: null | number;
  t: (arg0: string, arg1?: any) => any;
}

class Error extends Component<Props> {
  static defaultProps: { statusCode: null; };

  static getInitialProps({ res, err }: { res: any, err: any }) {
    let statusCode = null
    if (res) {
      ({ statusCode } = res)
    } else if (err) {
      ({ statusCode } = err)
    }
    return {
      namespacesRequired: ['common'],
      statusCode,
    }
  }

  render() {
    const { statusCode, t } = this.props
    return (
      <p>
        {statusCode
          ? t('error-with-status', { statusCode })
          : t('error-without-status')}
      </p>
    )
  }
}

// @ts-ignore
export default withTranslation('common')(Error);