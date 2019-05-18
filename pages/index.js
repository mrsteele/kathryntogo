import Head from 'next/head'

export default () => (
  <main>
    <Head>
      <link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet' />
    </Head>

    <p align='center'>
      <img src='/static/img.jpg' alt='picture of me' />
    </p>
    <h2>The Story</h2>
    <p>
      For the last 3 years, I have been teaching English as a Second Language in Woodbridge, Virginia
      and been a member of Pillar Church of Dumfries. In April, JJ Alderman came to Pillar Church and
      shared about how he and his family are serving in Togo. The Aldermans have been working in church
      planting and developing leaders among the Gen and Watch unreached people groups for the
      last 10 years (if you would like to read about what God is doing through the Aldermans,
      check it out <a href='https://converge.org/missionary/jj-melissa-alderman' target='_blank'>here</a>.
      JJ shared about their desire for someone to serve in Togo for the upcoming year as a homeschool
      teacher for their children and the children of another missionary family. After praying and
      seeking counsel, I agreed to homeschool the missionary kids this upcoming year!
    </p>

    <p>
      By homeschooling the kids of these two missionary families, this will allow the new missionary family
      to focus on language and adjusting to life there. This will provide time for both of the missionary wives
      to focus on serving alongside their husbands.
    </p>
    <p>
      Outside of homeschooling, I will also be able to serve and build relationships with the Togolese people in my free time!
    </p>
    <p>
      My time in Togo will begin in August of this year, and I will return in April of 2020.
    </p>

    <h3>
      Where I’m Going
    </h3>
    <p>
      I’ll be living in southern Togo, which is located along the western coast of Africa.
      It is bordered by Ghana and Benin.
    </p>

    <h3>
      Partnering
    </h3>
    <p>
      Please let me know if you are committing to pray for me throughout the next year.
      I will send updates throughout my time in Togo, so please give me your email address
      if you would like to receive updates.
    </p>
    <p>
      I am raising financial support to serve in Togo this year. The finances will
      cover expenses such as rent, food, transportation, airfare, and visas.
      You can donate through Pillar Church of Dumfries. On their giving page,
      you can select a dropdown giving link for "Kathryn Ayers Togo". You can give a
      one-time gift or choose to give on a regular basis. Click on the link below to give financially:
    </p>
    <footer>
      <a className='btn' href='https://pillardumfries.churchcenter.com/giving/to/kathryn-ayers-togo' target='_blank'>Donate Now</a>
    </footer>

    <style jsx global>{`
html, body {
  font-size: 18px;
  background: #fefefe;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

main {
  background: #fff;
  max-width: 1000px;
  padding: 1em 2em 3em;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.25);
  margin: 0.5em auto;
}

footer {
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
  border-bottom: solid 2px blue;
}

a:hover {
  color: blue;
}

.btn {
  font-size: 1.25em;
}

img {
  max-width: 100%;
}

@media screen and (min-width: 728px) {
  main {
    margin-bottom: 2em;
  }

  img {
    margin: 0 0 1em 2em;
    width: 450px;
    float: right;
  }
}

`}</style>
  </main>
)
