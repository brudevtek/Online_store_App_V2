import classes from './PageLayout.module.css';

function PageLayout(props) {
  return <div className={classes.page_layout}>{props.children}</div>;
}

export default PageLayout;
