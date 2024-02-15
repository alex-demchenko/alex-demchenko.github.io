import IconMail from "./assets/icon-mail.png";
import IconTelegram from "./assets/icon-telegram.png";
import IconLocation from "./assets/icon-location.png";
import Photo from "./assets/photo_4.jpg";
import SectionBlock from "./components/SectionBlock";
import ExperienceCompany from "./components/ExperienceCompany";
import ExperienceJob from "./components/ExperienceJob";

export default function App() {
  return (
    <>
      <header className="px-[30px] py-4 flex flex-col md:flex-row print:flex-row justify-center items-center gap-2 md:gap-8 print:gap-8 border-b-2 border-b-black bg-[var(--theme-color)]">
        <p className="flex items-center">
          <img
            src={IconMail}
            width="20"
            className="block mr-1"
            alt="Mail icon"
          />
          alex.demchenko.84@gmail.com
        </p>
        <p className="flex items-center">
          <img
            src={IconTelegram}
            width="20"
            className="block mr-1"
            alt="Telegram icon"
          />
          @alex_demch
        </p>
        <p className="flex items-center">
          <img
            src={IconLocation}
            width="20"
            className="block mr-1"
            alt="Location icon"
          />
          Kyiv, Ukraine
        </p>
      </header>

      <main className="container">
        <section className="profile">
          <div className="photo">
            <img src={Photo} alt="Photo" />
          </div>
          <div>
            <h1 className="mb-4">OLEKSANDR DEMCHENKO</h1>
            <ul>
              <li>
                Full Stack software engineer with more than 10 years of
                experience in software development, 5 years of which in web
                development.
              </li>
              <li>Has work experience as a key developer and team lead.</li>
              <li>Key areas: React, Node.js, AWS, Terraform.</li>
              <li>
                Solid knowledge of object-oriented design and programming.
              </li>
              <li>
                Experience in onboarding colleagues and supporting junior
                developers.
              </li>
            </ul>
          </div>
        </section>

        <SectionBlock title="SKILLS">
          <ul className="mb-4 columns-2">
            <li>HTML, CSS, SASS</li>
            <li>TailwindCSS, UnoCSS, Bootstrap</li>
            <li>TypeScript, JavaScript</li>
            <li>React, Next.js</li>
            <li>shadcn-ui, PrimeReact</li>
            <li>Vue.js, Nuxt</li>
            {/* <!-- TODO gsap, chart.js --> */}
            <li>Node.js, NestJS, Strapi</li>
            <li>SQL, PostgreSQL, MongoDB</li>
            {/* <!-- TODO REST, GraphQL, tRPC, WebSocket? --> */}
            <li>Jest, Vitest, RTL, Cypress, Playwright</li>
            <li>C#, .NET</li>
            <li>AWS, Terraform</li>
            <li>Jenkins, BuildMaster</li>
            <li>Git, SVN</li>
            {/* <!-- TODO Docker? --> */}
          </ul>

          {/* <!-- TODO need B2 --> */}
          <p>English level: B1+</p>
        </SectionBlock>

        {/* <!-- TODO links to projects --> */}
        <SectionBlock title="EXPERIENCE">
          {/* <!-- TODO to Current or to Now? --> */}
          <ExperienceCompany
            company="Tino Digital Agency"
            where="Remote"
            jobs={[
              <ExperienceJob
                title="SENIOR FULL STACK REACT/NODE.JS DEVELOPER"
                dateRange="06/2023 to now"
                description={
                  <>
                    <p>
                      One of projects:{" "}
                      <a href="https://www.sparrowfi.com/" rel="nofollow">
                        Sparrow Crest
                      </a>
                    </p>

                    <p>Frontend:</p>
                    <ul>
                      <li>Ported backend from Strapi to NestJS</li>
                      <li>
                        Implemented responsive CRUD operations editor for
                        'object' entities via React, Next.js, shadcn/ui,
                        TailwindCSS
                      </li>
                      <li>
                        Implemented form handling and validation via
                        ReactHookForm and zod
                      </li>
                      <li>
                        Implemented editing documents with overlapping elements
                        for setting signatures, checkboxes and text in images or
                        pdfs via React Native
                      </li>
                      <li>
                        Implemented client and server state management via
                        ReduxToolkit, Zustand, ReactQuery, ApolloClient
                      </li>
                      <li>
                        Implemented universal table component with filtering,
                        sorting, row selecting, sticky column, column hiding,
                        column reordering via drag and drop or dialog,
                        pagination, cell text cropping with loading, no results
                        and no data states via React, TanStack Table, react-dnd,
                        TailwindCSS
                      </li>
                      <li>
                        Implemented footer text editor via ProseMirror, Redux
                        Toolkit, RTK Query
                      </li>
                      <li>
                        Implemented full page slidings via Swiper, React,
                        Next.js
                      </li>
                      <li>
                        Implemented animations on the pages via FramerMotion
                      </li>
                      <li>
                        Implemented integration with Google Analytics, Mixpanel
                        Analytics
                      </li>
                      <li>Wrote E2E tests via Cypress</li>
                      <li>Provided code review</li>
                    </ul>

                    <p>Backend:</p>
                    <ul>
                      <li>
                        Implemented CRUD operations for 'object' and related
                        entities via NestJS, GraphQL, Pothos, zod
                      </li>
                      <li>
                        Implemented REST API endpoints for CRUD operations with
                        billboards, rents, owners via NestJS, with documentation
                        via Swagger
                      </li>
                      <li>
                        Implemented service for uploading images to S3 bucket
                        via multer
                      </li>
                      <li>
                        Implemented email notification service for various
                        events
                      </li>
                      <li>
                        Implemented interaction with PostgreSQL DB via TypeORM
                      </li>
                      <li>Implemented unit tests via Jest</li>
                      <li>Implemented deploying via Docker and CapRover</li>
                    </ul>
                  </>
                }
              />,
            ]}
          />

          <ExperienceCompany
            company="Startup"
            where="Remote"
            jobs={[
              <ExperienceJob
                title="FULL STACK VUE.JS/NODE.JS DEVELOPER"
                dateRange="08/2022 to 06/2023"
                description={
                  <>
                    <ul>
                      <li>
                        Developed skill management features in all layers of the
                        application: MongoDB database schema via mongoose;
                        GraphQL type mapping; database repositories; backend
                        services with business logic in a builtin Nuxt server;
                        frontend Vue components via PrimeVue, Chart.js and
                        FullCalendar packages; user interface including layout
                        and styles via UnoCSS
                      </li>
                      <li>
                        Wrote Unit and E2E tests via Vitest and Playwright
                      </li>
                      <li>
                        Configured CI CD jobs for build, deployment the
                        application and backup DB in BuildMaster
                      </li>
                      <li>Provided code review</li>
                    </ul>
                  </>
                }
              />,
            ]}
          />

          <ExperienceCompany
            company="EPAM Systems"
            where="Remote"
            jobs={[
              <ExperienceJob
                title="FULL STACK REACT/.NET DEVELOPER"
                dateRange="05/2022 to 08/2022"
                description={
                  <>
                    <p>
                      Project: EBSCO, Customer and Products management
                      department
                    </p>
                    <ul>
                      <li>
                        Participated in iteration planning by discussing new
                        features with product owners, story decomposition into
                        tasks, estimating tasks via scrum poker.
                      </li>

                      <li>
                        Developed frontend React components which requests data
                        via ReactQuery
                      </li>
                      <li>
                        Developed backend API endpoints in ASP.NET Core 3 server
                        which interacts with Aurora PostgreSQL database via
                        EntityFramework Core
                      </li>

                      <li>Add new features to existed AWS lambdas</li>
                      <li>
                        Wrote Unit tests via NUnit, FluentAssertions,
                        AutoFixture
                      </li>
                      <li>Fixed code issues which was found by SonarQube</li>
                      <li>Demonstrated developed features to customers</li>
                    </ul>
                  </>
                }
              />,
              <ExperienceJob
                title=".NET CORE DEVELOPER"
                dateRange="06/2021 to 12/2021"
                description={
                  <>
                    <p>Project: LSEG, AAA Provisioning Pillar</p>
                    <ul>
                      <li>
                        Investigated possibilities of Aurora for concrete
                        business needs including communication with other teams
                        with knowledge sharing
                      </li>
                      <li>
                        Configured an Auror PostgreSQL a database via terraform,
                        with global replication for several regions
                      </li>
                      <li>
                        Configured a EF Core DbContext for code first approach
                      </li>
                      <li>
                        Implemented an Lambda that performs database schema
                        migration via EF Core
                      </li>
                      <li>
                        Developed Jenkins jobs for deploy, destroy, restore
                        backup the Aurora DB Configured AWS resources via
                        Terraform like Lambda, SQS, SNS, DynamoDB, IAM roles,
                        Route 53, CloudWatch Logs
                      </li>
                      <li>
                        Developed Jenkins jobs for build, deploy, destroy and
                        run tools Added new data filters via query parameters
                        with validation to main ASP.NET Core API application
                        which request data from DynamoDB
                      </li>
                      <li>
                        Developed Unit and E2E tests via NUnit,
                        FluentAssertions, AutoFixture, Moq, SpecFlow
                      </li>
                      <li>Fixed code issues which was found by SonarQube</li>
                      <li>
                        Supported Junior Developers in completing their tasks
                      </li>
                      <li>
                        Participated in decomposition and estimation tasks
                      </li>
                      <li>Provided code review</li>
                    </ul>
                  </>
                }
              />,
              <ExperienceJob
                title="FULL STACK JAVASCRIPT/.NET DEVELOPER"
                dateRange="11/2020 to 06/2021"
                description={
                  <>
                    <p>
                      Project: SAP-WEB, Development and support for SAP VEP
                      sites: events.sap.com, webinars.sap.com, discover.sap.com,
                      administration site
                    </p>
                    <p>As a Key Developer:</p>
                    <ul>
                      <li>
                        Updated solution from .NET Framework 3.5 and 4.5 to 4.8
                      </li>
                      <li>Updated server support from TLS 1.0 to 1.3</li>
                      <li>Updated ElasticSearch from 1.6 to 7.4</li>
                      <li>
                        Reimplemented tool for gathering webinar visitors from
                        third-party webinar platform and store data in MS SQL DB
                      </li>
                      <li>
                        Implemented device detection via 51Degrees Cloud AP
                      </li>
                      <li>
                        Configured and manually deployed of development
                        environment
                      </li>
                      <li>Eliminated the discrepancy between environments</li>
                      <li>
                        Cleared the database of unused tables and stored
                        procedures
                      </li>
                      <li>Fixed issues detected by SonarQube</li>
                      <li>Improved logging</li>
                      <li>Provided code refactoring</li>
                      <li>Participated in production support duty</li>
                    </ul>
                    <p>As a Team Lead:</p>
                    <ul>
                      <li>
                        Participated in stand-up meetings with the customer
                      </li>
                      <li>
                        Managed tasks: participate in the ranking of tasks,
                        decomposition and estimation tasks, distribute tasks to
                        team members, clarify the technical side of tasks, track
                        the progress of tasks by stand-up meetings
                      </li>
                      <li>
                        Implemented of integration with SMC (SAP Marketing
                        Cloud)
                      </li>
                      <li>Implemented and supported of CI</li>
                      <li>Provided code refactoring</li>
                      <li>Provided code review</li>
                      <li>Onboarded 3 developers on the project</li>
                    </ul>
                  </>
                }
              />,
            ]}
          />

          <ExperienceCompany
            company="Startup"
            where="Remote"
            jobs={[
              <ExperienceJob
                title="FULL STACK REACT/.NET CORE DEVELOPER"
                dateRange="07/2018 to 10/2020"
                description={
                  <>
                    <ul>
                      {/* <!-- TODO more details --> */}
                      <li>
                        Implemented display and generation of article based on
                        provided data via ASP.NET Core, React, PrimeReact
                      </li>
                      <li>Implemented user role based authorization</li>
                      <li>
                        Designed the MS SQL database via EF Core code first
                        approach
                      </li>
                      <li>
                        Implemented CI/CD jobs for building and deploying the
                        application to the GCP
                      </li>
                      <li>Wrote unit tests via xUnit</li>
                      <li>
                        Did profiling and optimization of queries to the
                        database
                      </li>
                    </ul>
                  </>
                }
              />,
            ]}
          />

          <ExperienceCompany
            company="Gameloft"
            where="Kharkiv, Ukraine"
            jobs={[
              <ExperienceJob
                title="C++ DEVELOPER"
                dateRange="11/2017 to 07/2018"
                description={
                  <>
                    <p>
                      Project:{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDPMF&hl=en&gl=RU"
                        rel="nofollow"
                      >
                        "Disney Princess Majestic Quest"
                      </a>{" "}
                      is a mobile game in the genre of match 3 for Android
                    </p>
                    <ul>
                      <li>
                        Implemented match 3 game mechanics using corporate
                        engine and tools
                      </li>
                      <li>Implemented AI for testing game levels</li>
                      <li>Improved of particle system editor tool</li>
                    </ul>
                  </>
                }
              />,
              <ExperienceJob
                title="C++ DEVELOPER"
                dateRange="08/2016 to 09/2017"
                description={
                  <>
                    <p>
                      Project:{" "}
                      <a
                        href="https://apps.apple.com/us/app/minion-rush-running-game/id596402997"
                        rel="nofollow"
                      >
                        "Minion Rush: Despicable Me"
                      </a>{" "}
                      is a mobile game in the genre of endless run for iOS
                    </p>
                    <ul>
                      <li>
                        Implemented game updates and new game mechanics using
                        corporate engine and tools
                      </li>
                      <li>Implemented new character skills</li>
                      <li>Reimplemented DLC workflow</li>
                    </ul>
                  </>
                }
              />,
            ]}
          />

          <ExperienceCompany
            company="ProgramAce"
            where="Kharkiv, Ukraine"
            jobs={[
              <ExperienceJob
                title="C# UNITY DEVELOPER"
                dateRange="11/2014 to 12/2015"
                description={
                  <>
                    <ul>
                      <li>Implemented a landscape display system</li>
                      <li>Implemented a city development system</li>
                      <li>Implemented a messaging system</li>
                      <li>Implemented shaders for various visual effects</li>
                    </ul>
                  </>
                }
              />,
            ]}
          />
        </SectionBlock>

        {/* <!-- EDUCATION AND TRAINING --> */}
        <SectionBlock title="EDUCATION">
          <p className="mb-4">
            <strong>
              Simon Kuznets Kharkiv National University of Economics
            </strong>
            , Kharkiv, Ukraine
            <br />
            <strong>Bachelor's</strong>, Information Systems And Technologies,
            2014
          </p>
          <p>
            <strong>Kharkiv Radio Technical School</strong>, Kharkiv, Ukraine
            <br />
            <strong>Junior Specialist</strong>, Software Engineering, 2012
          </p>
        </SectionBlock>

        {/* <!-- TODO Footer: Thanks for watching --> */}
      </main>
    </>
  );
}
