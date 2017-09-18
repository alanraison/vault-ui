import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

export default function Settings() {
  return (
    <Card>
      <CardHeader title="Login Methods" />
      <CardContent>
        <Card>
          <CardHeader title="UserPass" />
        </Card>
      </CardContent>
    </Card>
  );
}

Settings.propTypes = ({

});
