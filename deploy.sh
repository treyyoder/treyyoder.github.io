# Run from the milestone branch
npm install
npm run deploy
git checkout gh-pages
git pull
git branch -D master
git branch -m gh-pages master
git push origin HEAD
