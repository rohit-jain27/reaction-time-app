import styles from './_App.scss';
import React from 'react';
import Grid from './Grid.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <Grid />
      </div>
    );
  }
}
