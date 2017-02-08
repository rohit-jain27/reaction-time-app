import React from 'react';
import ReactDOM from 'react-dom';
import styles from './_Grid.scss';

export default class Grid extends React.Component {

  state = {
    markerPos: {
      x: 0,
      y: 0
    },
    level: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props === nextProps && this.state === nextState) {
      return false;
    }

    return true;
  }

  handleStartClicked = () => {
    this.setState({level: 1});
    this.generateHitMarker();
  }

  generateHitMarker = () => {
    let randX = Math.floor(Math.random() * this.gridBox.clientWidth + 1);
    let randY = Math.floor(Math.random() * this.gridBox.clientHeight + 1);

    this.setState({
      markerPos: {
        x: randX,
        y: randY
      }
    });
  }

  render() {

    let markerStyle = {};
    let markerClass = styles.hitMarker;

    if (this.state.level > 0) {
      markerStyle.left = this.state.markerPos.x;
      markerStyle.top = this.state.markerPos.y;
    } else {
      markerClass += " " + styles["hitMarker--hidden"];
    }


    return(
      <div>
        <div>Grid Component!</div>
        <div className={styles.gridContainer}>
          <div ref={ref => this.gridBox = ref} className={styles.grid}>
            <div className={markerClass} style={markerStyle}></div>
          </div>
        </div>
        <div onClick={this.handleStartClicked}>Start</div>
      </div>
    )
  }
}
