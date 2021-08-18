import React from 'react';
import moment from 'moment/min/moment-with-locales';

export default function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      moment.lang('ru');
      const data = moment(this.props.date);
      return <Component date={data.fromNow()}/>;
    }
  };
}
