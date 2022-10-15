import React, { useState } from "react";
//import Button from "react-bootstrap/Button";

import styles from "./app.module.css";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { Button } from "react-bootstrap";

const App = () => {
  // save clicks of each button to its own state
  const [data, setData] = useState([
    {
      title: "Anxiety",
      link: "/firstpage.html",
      tags: [
        "fear",
        "rapid heartbeat",
        "Social withdrawal",
        "panic",
        "difficulties breathing",
      ],
    },

    {
      title: "Oppositional Defiant",
      link: "http://google.com/",
      tags: [
        "Easily irritated",
        "Low self-esteem",
        "defy others",
        "blame others",
      ],
    },

    {
      title: "Conduct Disorder",
      link: "http://google.com/",
      tags: ["Easily irritated", "defy others", "criminal behavior"],
    },

    {
      title: "Attention Deficit Hyperactivity",
      link: "http://google.com/",
      tags: [
        "Easily irritated",
        "Difficulty concentrating",
        "restlessness",
        "fidgeting",
      ],
    },

    {
      title: "Bipolar disorder – Mania",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#bipolar-affective-disorder",
      tags: ["Easily irritated", "no sleep", "energetic"],
    },

    {
      title: "Bipolar disorder – Depression",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#bipolar-affective-disorder",
      tags: [
        "Low self-esteem",
        "Social withdrawal",
        "Difficulty concentrating",
        "Intrusive thoughts",
      ],
    },

    {
      title: "Bipolar disorder – Psychosis",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#bipolar-affective-disorder",
      tags: ["Easily irritated", "no sleep", "energetic"],
    },

    {
      title: "Depression",
      link: "http://google.com/",
      tags: [
        "Fatigue",
        "Low self-esteem",
        "Social withdrawal",
        "Difficulty concentrating",
        "Intrusive thoughts",
        "tired",
      ],
    },
    {
      title: "Dissociation and Dissociative Disorders",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#dissociation-and-dissociative-disorders/",
      tags: [
        "Social withdrawal",
        "Difficulty concentrating",
        "derealisation",
        "mood shifts",
      ],
    },

    {
      title: "Eating disorders",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#eating-disorders",
      tags: ["Weight fluctuation", "Fainting", "decreased interest in food"],
    },

    {
      title: "Symptoms of OCD – Obsessions",

      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#obsessive-compulsive-disorder",
      tags: ["fear", "Intrusive thoughts", "Fear of germs"],
    },

    {
      title: "Symptoms of OCD – Compulsions",

      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#obsessive-compulsive-disorder",
      tags: [
        "Social withdrawal",
        "Easily irritated",
        "Intrusive thoughts",
        "Excessive cleaning",
        "Paranoia",
      ],
    },

    {
      title: "Post-traumatic Stress Disorder",

      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#post-traumatic-stress-disorder",
      tags: [
        "fear",
        "rapid heartbeat",
        "Intrusive thoughts",
        "Unwanted memories",
      ],
    },

    {
      title: "Psychosis",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#psychosis",
      tags: ["Hallucinations", "Confused thinking"],
    },

    {
      title: "Schizophrenia",
      link: "https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses#schizophrenia",
      tags: ["Hallucinations", "Social withdrawal"],
    },
  ]);

  const tagList = data.reduce((tagList, item) => {
    let newTags = item.tags.filter((j) => tagList.indexOf(j) === -1);
    return [...tagList, ...newTags];
  }, []);

  const [stateTagList, setStateTagList] = useState([]);

  const RemoveOrAddTags = (tag) => {
    if (stateTagList.includes(tag)) {
      return stateTagList.filter((i) => i !== tag);
    } else {
      return [...stateTagList, tag];
    }
  };

  const [stateTagColor, setStateTagColor] = useState(
    Array(tagList.length).fill("#ffecb3")
  );

  const TagButton = ({ tag, index }) => {
    return (
      <Button
        className={ styles.margind }
        style={ { backgroundColor: stateTagColor[index], color: "black" } }
        onClick={ () => {
          setStateTagList(() => RemoveOrAddTags(tag));
          setData(data);
          let tempTagColor = stateTagColor;

          if (tempTagColor[index] === "#ffecb3") {
            tempTagColor[index] = "#ffd24d";
          } else {
            tempTagColor[index] = "#ffecb3";
          }
          setStateTagColor(tempTagColor);
        } }
      >
        { tag }
      </Button>
    );
  };

  function getArraysIntersection(a1, a2) {
    return a1.filter(function (n) {
      return a2.indexOf(n) !== -1;
    });
  }

  return (
    <div className="container" style={ { marginTop: "90px" } }>
      <div className="row">
        <div >
          <div className="container">
            <div className={ styles.tags }>
              { tagList.map((item, i) => (
                <TagButton key={ i } tag={ item } index={ i } />
              )) }
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={ { marginTop: 10 } }>
        <div >
          <div className="container" style={ { columnCount: 3, } }>
            { data
              .filter(
                (item) =>
                  getArraysIntersection(item.tags, stateTagList).length > 0
              )
              .map((item, i) => (
                <DisorderCard
                  key={ i }
                  title={ item.title }
                  content={ item.summary }
                  link={ item.link }
                ></DisorderCard>
              )) }
          </div>
        </div>
      </div>
    </div>
  );
};

const DisorderCard = ({ title, content, link }) => {
  return (
    <Card className={ useStyles().anotherRoot } style={ { boxShadow: "none" } }>
      <Link className="btn btn-info" href={ link } underline="none" style={ { width: "100%" } }>
        <Typography gutterBottom variant="h5" component="h2">
          { title }{ " " }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { content }
        </Typography>
      </Link>
    </Card>
  );
};

const useStyles = makeStyles({
  anotherRoot: {
    className: "btn-warning",
    backgroundColor: "transparent",
    maxWidth: 310,
    margin: 10,
    padding: 0,
    minWidth: 100,
    borderShadow: "none",
    textAlign: 'center',
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }
  },
});

export default App;
