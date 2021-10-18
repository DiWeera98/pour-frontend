import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  p: {
    margin: "0 0 13px 0",
    textAlign: "justify",
  },
  a: {
    color: "#fff",
  },
  center: {
    textAlign: "center",
    fontSize: "2rem",
  },
  container: {
    width: "95%",
    maxWidth: "1220px",
    margin: "0 auto",
  },
  entry: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    position: "relative",
  },
  entry__number: {
    fontSize: "6vw",
    fontWeight: "600",
    padding: "10px 0",
    position: "sticky",
    top: "0",
    textAlign: "center",
    height: "calc(10vw + 20px)",
    transition: "all 0.2s ease-in",
  },
  entry__content: {
    borderTop: "2px solid #28282b",
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    gridGap: "10px",
    padding: "15px 0",
    "&:title": {
      fontWeight: "600",
    },
    "&:story": {
      lineHeight: "26px",
    },
  },
}));

export default function Read() {
  const classes = useStyles();
  return (
    <body>
      <div className={classes.container}>
        <h1 className={classes.center}>Journal Name</h1>

        <article className={classes.entry}>
          <div className={classes.entry__number}>00</div>
          <div className={classes.entry__content}>
            <div className={classes["&:title"]}>10/10/2021</div>
            <div className={classes["&:story"]}>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                nunc id cursus metus aliquam eleifend. Mi sit amet mauris
                commodo. Condimentum vitae sapien pellentesque habitant. Dui
                nunc mattis enim ut tellus elementum. Tellus at urna condimentum
                mattis pellentesque id nibh tortor. In ornare quam viverra orci
                sagittis eu. Fringilla est ullamcorper eget nulla facilisi. Sit
                amet justo donec enim. Donec enim diam vulputate ut pharetra sit
                amet aliquam. Nibh sed pulvinar proin gravida hendrerit lectus
                a. Viverra tellus in hac habitasse. Nunc mattis enim ut tellus
                elementum sagittis vitae et. Integer malesuada nunc vel risus
                commodo viverra maecenas accumsan lacus. Est sit amet facilisis
                magna etiam tempor orci eu lobortis. Nulla facilisi morbi tempus
                iaculis urna.
              </p>

              <p className={classes.p}>
                Enim nunc faucibus a pellentesque sit amet porttitor. Posuere
                urna nec tincidunt praesent semper. Turpis egestas integer eget
                aliquet. Id nibh tortor id aliquet lectus. Gravida dictum fusce
                ut placerat orci nulla. Imperdiet dui accumsan sit amet nulla
                facilisi morbi. Nam libero justo laoreet sit amet cursus sit.
                Pellentesque dignissim enim sit amet venenatis urna. Dictum at
                tempor commodo ullamcorper a lacus vestibulum sed. Magna sit
                amet purus gravida quis blandit turpis. Purus in massa tempor
                nec. Aliquet bibendum enim facilisis gravida neque. Vitae turpis
                massa sed elementum tempus. Suspendisse faucibus interdum
                posuere lorem ipsum dolor. Ornare arcu dui vivamus arcu. Nam
                aliquam sem et tortor consequat.
              </p>
            </div>
          </div>
        </article>

        <article className={classes.entry}>
          <div className={classes.entry__number}>01</div>
          <div className={classes.entry__content}>
            <div className={classes["&:title"]}>11/10/2021</div>
            <div className={classes["&:story"]}>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                nunc id cursus metus aliquam eleifend. Mi sit amet mauris
                commodo. Condimentum vitae sapien pellentesque habitant. Dui
                nunc mattis enim ut tellus elementum. Tellus at urna condimentum
                mattis pellentesque id nibh tortor. In ornare quam viverra orci
                sagittis eu. Fringilla est ullamcorper eget nulla facilisi. Sit
                amet justo donec enim. Donec enim diam vulputate ut pharetra sit
                amet aliquam. Nibh sed pulvinar proin gravida hendrerit lectus
                a. Viverra tellus in hac habitasse. Nunc mattis enim ut tellus
                elementum sagittis vitae et. Integer malesuada nunc vel risus
                commodo viverra maecenas accumsan lacus. Est sit amet facilisis
                magna etiam tempor orci eu lobortis. Nulla facilisi morbi tempus
                iaculis urna.
              </p>
            </div>
          </div>
        </article>

        <article className={classes.entry}>
          <div className={classes.entry__number}>02</div>
          <div className={classes.entry__content}>
            <div className={classes["&:title"]}>12/10/2021</div>
            <div className={classes["&:story"]}>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                nunc id cursus metus aliquam eleifend. Mi sit amet mauris
                commodo. Condimentum vitae sapien pellentesque habitant. Dui
                nunc mattis enim ut tellus elementum. Tellus at urna condimentum
                mattis pellentesque id nibh tortor. In ornare quam viverra orci
                sagittis eu. Fringilla est ullamcorper eget nulla facilisi. Sit
                amet justo donec enim. Donec enim diam vulputate ut pharetra sit
                amet aliquam. Nibh sed pulvinar proin gravida hendrerit lectus
                a. Viverra tellus in hac habitasse. Nunc mattis enim ut tellus
                elementum sagittis vitae et. Integer malesuada nunc vel risus
                commodo viverra maecenas accumsan lacus. Est sit amet facilisis
                magna etiam tempor orci eu lobortis. Nulla facilisi morbi tempus
                iaculis urna.
              </p>

              <p className={classes.p}>
                Enim nunc faucibus a pellentesque sit amet porttitor. Posuere
                urna nec tincidunt praesent semper. Turpis egestas integer eget
                aliquet. Id nibh tortor id aliquet lectus. Gravida dictum fusce
                ut placerat orci nulla. Imperdiet dui accumsan sit amet nulla
                facilisi morbi. Nam libero justo laoreet sit amet cursus sit.
                Pellentesque dignissim enim sit amet venenatis urna. Dictum at
                tempor commodo ullamcorper a lacus vestibulum sed. Magna sit
                amet purus gravida quis blandit turpis. Purus in massa tempor
                nec. Aliquet bibendum enim facilisis gravida neque. Vitae turpis
                massa sed elementum tempus. Suspendisse faucibus interdum
                posuere lorem ipsum dolor. Ornare arcu dui vivamus arcu. Nam
                aliquam sem et tortor consequat.
              </p>
            </div>
          </div>
        </article>

        <article className={classes.entry}>
          <div className={classes.entry__number}>03</div>
          <div className={classes.entry__content}>
            <div className={classes["&:title"]}>13/10/2021</div>
            <div className={classes["&:story"]}>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                nunc id cursus metus aliquam eleifend. Mi sit amet mauris
                commodo. Condimentum vitae sapien pellentesque habitant. Dui
                nunc mattis enim ut tellus elementum. Tellus at urna condimentum
                mattis pellentesque id nibh tortor. In ornare quam viverra orci
                sagittis eu. Fringilla est ullamcorper eget nulla facilisi. Sit
                amet justo donec enim. Donec enim diam vulputate ut pharetra sit
                amet aliquam. Nibh sed pulvinar proin gravida hendrerit lectus
                a. Viverra tellus in hac habitasse. Nunc mattis enim ut tellus
                elementum sagittis vitae et. Integer malesuada nunc vel risus
                commodo viverra maecenas accumsan lacus. Est sit amet facilisis
                magna etiam tempor orci eu lobortis. Nulla facilisi morbi tempus
                iaculis urna.
              </p>

              <p className={classes.p}>
                Enim nunc faucibus a pellentesque sit amet porttitor. Posuere
                urna nec tincidunt praesent semper. Turpis egestas integer eget
                aliquet. Id nibh tortor id aliquet lectus. Gravida dictum fusce
                ut placerat orci nulla. Imperdiet dui accumsan sit amet nulla
                facilisi morbi. Nam libero justo laoreet sit amet cursus sit.
                Pellentesque dignissim enim sit amet venenatis urna. Dictum at
                tempor commodo ullamcorper a lacus vestibulum sed. Magna sit
                amet purus gravida quis blandit turpis. Purus in massa tempor
                nec. Aliquet bibendum enim facilisis gravida neque. Vitae turpis
                massa sed elementum tempus. Suspendisse faucibus interdum
                posuere lorem ipsum dolor. Ornare arcu dui vivamus arcu. Nam
                aliquam sem et tortor consequat.
              </p>
            </div>
          </div>
        </article>
      </div>
    </body>
  );
}
