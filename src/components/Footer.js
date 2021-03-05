import React from 'react';
import '../stylesheets/layout/_footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <small className="Footer_small">
          Rick and Morty by{' '}
          <a href="https://github.com/bertapsan" target="_blank" className="Footer__small--link">
            bertapsan <i class="fas fa-feather-alt"></i>
          </a>
        </small>
      </footer>
    );
  }
}
export default Footer;
