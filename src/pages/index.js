/** @jsx jsx */
import Layout from "../components/layout"
import SEO from "../components/seo"
import { jsx, css } from '@emotion/core'
import Box from '../components/Box'
import soIcon from '../images/soIcon.svg'
import { Trello, FileText, Inbox, Briefcase, Edit, GitHub, Codepen } from 'react-feather'
import { colors as c } from "../style/variables"
import projects from '../components/projects.json'

const style = css`
  ul {
    list-style-type: none;
    margin: 0;

    li:last-child {
      margin: 0;
    }
  }

  .section {
    display: flex;
    margin-bottom: 40px;

    > div:nth-child(2) {
      margin-left: 40px;
    }

  }

  .socialIcons {
    a {
      margin-right: 15px;

      svg {
        stroke: #222;
      }

      &:hover {
        svg {
          stroke: orange;
        }
      }
    }
  }

  #experience h3 {
    position: relative;

    &:before {
      content: "";
      width: 25px;
      height: 25px;
      background-color: white;
      position: absolute;
      left: -44px;
      top: 1px;
      border: 1px solid ${c.border};
      border-radius: 50%;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="wrapper" css={style}>

      <section className="section">
        <Box dash lines >
          <ul>
            <li>
              <b>Location</b>
            </li>
            <li>Berlin (Germany)</li>
            <li>
              <b>E-Mail</b>
            </li>
            <li>
              <a href="mailto:danieldoblado@gmail.com">danieldoblado@gmail.com</a>
            </li>
            <li>
              <b>Social</b>
            </li>
            <li className="socialIcons">
              <a href="https://github.com/dobladov/">
                <GitHub/>
              </a>
              <a href="https://codepen.io/dobladov/">
                <Codepen/>
              </a>
              <a href="https://stackoverflow.com/users/2498992/daniel-doblado">
                <img
                  css={css`
                    width: 24px;
                    height: 24px;
                  `}
                  src={soIcon}
                  alt=""
                />
              </a>

            </li>
          </ul>
        </Box>

        <Box title="About" Icon={FileText} >
          Soy un grato trabajador
        </Box>
      </section>

      <div className="section">
        <Box title="Blog posts" Icon={Edit} >
        </Box>

        <Box title="Abilities" lines dash >
          <ul>
            <li>Native Spanish</li>
            <li>English B2</li>
            <li>React, Vue</li>
          </ul>
        </Box>
      </div>

      <div className="section">
        <Box
          title="Projects"
          Icon={Trello}
          contentStyle={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          `}
        >
        {projects.map(project => (
          <Box
            key={project.title}
            dash
            style={css`
              width: 100px;
              padding: 20px 50px;
              margin: 10px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;

              h4 {
                font-size: .9rem;
                margin-bottom: 0;
              }
            `}
          >
            <h4>{project.title}</h4>
          </Box>
        ))}
        </Box>
      </div>

      <div className="section">
        <Box id="experience" title="Experience" Icon={Briefcase} >
          <h3>Graphthinking GmbH</h3>
          <h3>Jokerative</h3>
          <h3>Dabo Consulting</h3>
          <h3>Abire Formación</h3>
          <h3>Direccionate</h3>
        </Box>

        <Box title="Contact" Icon={Inbox} >
          I'm currently working in Berlin but I can relocate anywhere if your offer is appealing for both of us.
        </Box>
      </div>

    </div>
  </Layout>
)

export default IndexPage
