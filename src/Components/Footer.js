import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const FooterEx = () => (
  <div style={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
    <Divider style={{ margin: "24px auto", width: 60 }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          ©Rhema Makamba 2019
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <div className="SocialLinks">
            {/* Insagram */}
            <a
              href="https://www.instagram.com/rayn_dropz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-instagram" aria-hidden="true" />
            </a>
            {/* Github */}
            <a
              href="https://github.com/Iamrhema"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-github" aria-hidden="true" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/notifications/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-linkedin" aria-hidden="true" />
            </a>
          </div>
        </Typography>
      </Grid>
    </Grid>
  </div>
);

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
