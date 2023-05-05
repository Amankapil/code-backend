import db from "../index.js";

import path from "path";



export const addWebInfo = (req, res) => {
  try {
    // const { image } = req.files.image;
    const { homeHero } = req.body;
    const data = {
      homeHero: homeHero,
    };

    db.query("INSERT INTO home_page set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

export const addWebInfoAbout = (req, res) => {
  try {
    const { homeAbout } = req.body;
    const data = {
      homeAbout: homeAbout,
    };

    db.query("INSERT INTO home_page_about set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfoServices = (req, res) => {
  try {
    const { homeServices } = req.body;
    const data = {
      homeServices: homeServices,
    };

    db.query(
      "INSERT INTO home_page_service set ?",
      data,
      (err, rows, fields) => {
        if (err) {
          console.error(err);
        } else {
          console.log(rows);
          res.send("added");
        }
      }
    );
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutHero = (req, res) => {
  try {
    const { aboutHeading } = req.body;
    const data = {
      aboutHeading: aboutHeading,
    };

    db.query("INSERT INTO abouthero set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutvision = (req, res) => {
  try {
    const { vision_pera } = req.body;
    const data = {
      vision_pera: vision_pera,
    };

    db.query("INSERT INTO vision set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutguiding = (req, res) => {
  try {
    const { guiding_pera } = req.body;
    const data = {
      guiding_pera: guiding_pera,
    };

    db.query("INSERT INTO guiding set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutTestimonial = (req, res) => {
  try {
    const { idea, innovate, imp } = req.body;
    const data = {
      idea: idea,
      innovate: innovate,
      imp: imp,
    };

    db.query("INSERT INTO test set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutcrew = (req, res) => {
  try {
    const { crew, crew_pera } = req.body;
    const data = {
      crew: crew,
      crew_pera: crew_pera,
    };

    db.query("INSERT INTO crew set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutcrew_box = (req, res) => {
  try {
    const { Design, Strategists, Tech_Experts, Delivery_Managers } = req.body;
    const data = {
      Design: Design,
      Strategists: Strategists,
      Tech_Experts: Tech_Experts,
      Delivery_Managers: Delivery_Managers,
    };

    db.query("INSERT INTO crew_boxess set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoAboutcaseStudy = (req, res) => {
  try {
    const { peak, peakPera } = req.body;
    const data = {
      peak: peak,
      peakPera: peakPera,
    };

    db.query("INSERT INTO case_study set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<=====================================>
export const addWebInfoservicewedo = (req, res) => {
  try {
    const { heading, do_pera } = req.body;
    const data = {
      heading: heading,
      do_pera: do_pera,
    };

    db.query("INSERT INTO services_wedo set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<====================-----------=================>
export const addWebInfoserviceability = (req, res) => {
  try {
    const {
      problem_solve,
      problem_pera,
      leader,
      leader_pera,
      patrons,
      patron_pera,
    } = req.body;
    const data = {
      problem_solve: problem_solve,
      problem_pera: problem_pera,
      leader: leader,
      leader_pera: leader_pera,
      patrons: patrons,
      patron_pera: patron_pera,
    };

    db.query("INSERT INTO ability set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<====================-----------=================>
export const addWebInfoWork = (req, res) => {
  try {
    const { work_hero } = req.body;
    const data = {
      work_hero: work_hero,
    };

    db.query("INSERT INTO wookpage set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
// ?<====================-----------=================>
export const addWebInfocareer = (req, res) => {
  try {
    const { careerHero } = req.body;
    const data = {
      careerHero: careerHero,
    };

    db.query("INSERT INTO career set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfocareerwhyus = (req, res) => {
  try {
    const { heading, pera2, pera1 } = req.body;
    const data = {
      heading: heading,
      pera1: pera1,
      pera2: pera2,
    };

    db.query("INSERT INTO why_us set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfocareerwhyusBoxes = (req, res) => {
  try {
    const { grothHeading, grothPera, flex, flexPera, value, valuePera } =
      req.body;
    const data = {
      grothHeading: grothHeading,
      grothPera: grothPera,
      flex: flex,
      flexPera: flexPera,
      value: value,
      valuePera: valuePera,
    };

    db.query("INSERT INTO why_boxes set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfocareerlifeat = (req, res) => {
  try {
    const { lifeHeading, lifePera } = req.body;
    const data = {
      lifeHeading: lifeHeading,
      lifePera: lifePera,
    };

    db.query("INSERT INTO lifeat set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfocontact = (req, res) => {
  try {
    const { heading, pera } = req.body;
    const data = {
      heading: heading,
      pera: pera,
    };

    db.query("INSERT INTO contactus set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfoculsulting = (req, res) => {
  try {
    const { heading } = req.body;
    const data = {
      heading: heading,
    };

    db.query("INSERT INTO cunsulting set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfouserExper = (req, res) => {
  try {
    const { heading } = req.body;
    const data = {
      heading: heading,
    };

    db.query("INSERT INTO useexperience set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};
export const addWebInfoproducdev = (req, res) => {
  try {
    const { heading } = req.body;
    const data = {
      heading: heading,
    };

    db.query("INSERT INTO productdev set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

export const addWebInfodigitalmark = (req, res) => {
  try {
    const { heading } = req.body;
    const data = {
      heading: heading,
    };

    db.query(
      "INSERT INTO digitalmarketing set ?",
      data,
      (err, rows, fields) => {
        if (err) {
          console.error(err);
        } else {
          console.log(rows);
          res.send("added");
        }
      }
    );
  } catch (err) {}
};

// careers page - hr@codelinear.com
// contact us page - info@codelinear.com
// /////////////////////////////////////////////////////

export const sendMailContact = (req, res) => {
  const { fristName, lastName, email, number, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amankapil60@gmail.com", // Replace with your own email address
      pass: "zcgdsscknnjxmjlh", // Replace with your own email password
    },
  });
  // zcgdsscknnjxmjlh

  const mailOptions = {
    from: "amankapil60@gmail.com", // Replace with your own email address
    to: "rcky876@gmail.com", // Replace with the recipient's email address
    subject: "New message from your website",
    text: `FristName: ${fristName}\n LastName: ${lastName}\n Email: ${email}\n Number: ${number}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};
export const sendMailCareer = (req, res) => {
  const { fristName, lastName, email, message } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amankapil60@gmail.com", // Replace with your own email address
      pass: "zcgdsscknnjxmjlh", // Replace with your own email password
    },
  });
  
  // zcgdsscknnjxmjlh

  const mailOptions = {
    from: "amankapil60@gmail.com", // Replace with your own email address
    to: "rcky876@gmail.com", // Replace with the recipient's email address
    subject: "New message from your website",
    text: `FristName: ${fristName}\n LastName: ${lastName}\n Email: ${email}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};

// //////////////////////////////////////////////////////////////
// export const updateWebInfo = (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const id = req.params.id;

//     ////////////////////////////////////////////////////////
//     db.query(
//       "SELECT id FROM company_notes_tbl WHERE  id = ?",
//       [id],
//       (err, res) => {
//         if (err) {
//           throw err;
//         }
//         if (res.length > 0) {
//           db.query(
//             "UPDATE company_data SET title = ?, description = ?, WHERE id = ?  ",
//             [title, description, id],
//             (error) => {
//               if (error) {
//                 throw error;
//               }
//               return res.status(200).json({
//                 mes: "update sucess",
//               });
//             }
//           );
//         }
//       }
//     );
//   } catch (err) {}
// };
// =========================================================================================
// export const updateWebInfo = (req, res) => {
//   try {
//     // const { signature, email, password } = req.body;
//     const { title, description } = req.body;
//     // const id = req.params.id;
//     db.query(
//       "UPDATE company_notes_tbl SET title=?,description=? WHERE id=?",
//       [title, description, req.params.id],
//       (err, rows) => {
//         if (err) {
//           throw err;
//         } else {
//           return res.status(201).json({ message: ` updated` });
//         }
//       }
//     );
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// };
// =========================================================================================

// export const remove = (req, res) => {
//   db.query(
//     "DELETE FROM company_notes_tbl WHERE id = ?",
//     [req.params.id],
//     (err, rows, fields) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // console.log(rows);
//         res.send("deleted");
//       }
//     }
//   );
// };
export const getweb = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getwebHero = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getwebHomeAbout = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page_about", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getwebHomeservices = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM home_page_service", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutHero = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM abouthero", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutVision = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM vision", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutGuiding = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM guiding", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAbouttest = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM test", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutcrew = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM crew", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutcrew_box = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM crew_boxess", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebAboutcase_study = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM case_study", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebservicedo = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM services_wedo", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebserviceability = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM ability", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
// <=================================================================|?
export const getWebwork = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM wookpage", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebcareer = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM career", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebcareerwhyus = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM why_us", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebcareerwhyusboxes = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM why_boxes", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebcareerlifeat = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM lifeat", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebcontact = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM contactus", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebconsulting = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM cunsulting", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebuserExperince = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM useexperience", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebProducDev = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM productdev", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};
export const getWebdigitalmarket = (req, res) => {
  // app.get("", (req, res) => {
  db.query("SELECT * FROM digitalmarketing", (err, rows, fields) => {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      let rve = rows.reverse();
      const erve = rve[0];
      res.send(erve);
    }
  });
  console.log("welcome");
  // });
};

export const Login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (password === "123") {
    res.status(200);
    res.send({ message: "Login Successfull"});
  } else {
    res.status(404);
    res.send({ message: "Password didn't match" });
  }
  res.send({ message: "User not registered" });
};

export const Logout = (req, res) => {
  res.setHeader("Set-Cookie", [
    "session=; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
  ]);
  res.redirect("/login");
};
