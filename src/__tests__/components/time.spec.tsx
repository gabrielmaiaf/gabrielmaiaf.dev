import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import Time from '../../components/time';

function renderIntl(
  ui: React.ReactElement,
  { locale = 'en', ...renderOptions } = {},
) {
  const Wrapper: React.FC = ({ children }) => {
    return <IntlProvider locale={locale}>{children}</IntlProvider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('Time', () => {
  it('should be rendered properly', () => {
    const now = new Date();
    const TestData = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()}`;
    const resultData = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(now);
    const { getByTestId } = renderIntl(<Time date={TestData} />);

    expect(getByTestId('date-display')).toHaveTextContent(resultData);
  });
});
