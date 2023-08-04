const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const GOOGLE_CLIENT_ID =
  "586012277192-cgol7jl7d4582avlvdierd1f5kkhn64p.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "929d0c03b946faa8b559";
GITHUB_CLIENT_SECRET = "55a99dc95242719be416b936158c71449f7c53e8";

FACEBOOK_APP_ID = "1405026683398546";
FACEBOOK_APP_SECRET = "d66097622b35f428028d45b6aee732c6";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
