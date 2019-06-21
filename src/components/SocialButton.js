import React from 'react';
import { Button } from 'semantic-ui-react';
import { socialButtons } from '../constants/socialButtons';

const style = { minWidth: '100px' };

const SocialButton = ({ label, link, color }) => {
  return (
    <Button as="a" target="new" href={link} color={color} style={style}>
      {label}
    </Button>
  );
};

const SocialButtonGroup = () => {
  return (
    <div>
      {socialButtons.map(button => (
        <SocialButton key={`social-button-${button.label}`} {...button} />
      ))}
    </div>
  );
};

export default SocialButtonGroup;
export { SocialButton };
