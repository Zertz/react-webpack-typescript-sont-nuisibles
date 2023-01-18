import { ReactNode, useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import focus_par_telus from "./focus_par_telus.png";
import patate from "./patate.txt";
import trends from "./trends.png";

export default function Slides() {
  useEffect(() => {
    new Reveal().initialize();
  }, []);

  return (
    <div className="reveal absolute inset-0">
      <div className="slides">
        <Slide
          title="👋"
          subtitle="Pier-Luc"
          hints={[
            "GPS et capteurs",
            "toutes sortes de véhicules",
            "données, intelligence",
            "+/- 60 services en production",
            "app web",
          ]}
        >
          Développeur &rarr; FOCUS par TELUS
        </Slide>
        <Slide
          title="React, webpack et TypeScript sont nuisibles..."
          subtitle="...et vous devriez continuer de les utiliser!"
        />
        <Slide title="🙋‍♂️🙋‍♀️" subtitle="React?" />
        <Slide title="🙋‍♂️🙋‍♀️" subtitle="webpack?" />
        <Slide title="🙋‍♂️🙋‍♀️" subtitle="TypeScript?" />
        <Slide title="📈" subtitle="Vous n'êtes pas seul!">
          <img alt="trends" src={trends} />
        </Slide>
        <Slide
          title="😭"
          subtitle="Système maison"
          hints={[
            "à mon arrivée",
            "une personne",
            ">1 minute",
            "redémarrage manuel",
          ]}
        >
          <ul>
            <li>Lent</li>
            <li>Rigide</li>
          </ul>
        </Slide>
        <Slide title="🤖" subtitle="Lignes de code">
          <ul>
            <li>JavaScript: ~100 000</li>
            <li>TypeScript: ~100 000</li>
            <li>React: ~60 000</li>
          </ul>
        </Slide>
        <Slide
          title="💡"
          subtitle="Solutions (presque) parfaites"
          hints={["Nouvelles apps", "Entrer dans leur moule"]}
        >
          <ul>
            <li>Next</li>
            <li>Vite</li>
            <li>Remix</li>
            <li>Turbopack</li>
            <li>&darr;</li>
            <li>À la fine pointe, mais...</li>
          </ul>
        </Slide>
        <Slide title="🤔" subtitle="Pourquoi ce trio?">
          <ul>
            <li>TypeScript &rarr; Parce que</li>
            <li>React &rarr; Écosystème</li>
            <li>webpack &rarr; Intégration</li>
          </ul>
        </Slide>
        <Slide
          title="🥴"
          subtitle="webpack?!"
          hints={[
            "Support parfois inégal",
            "Pas de CommonJS",
            "Pas de TypeScript",
            "Pas de bonne solution CSS",
          ]}
        >
          <ul>
            <li>Bundler</li>
            <li>Transformer</li>
            <li>ESM (ECMAScript Modules) vs. CJS (CommonJS)</li>
          </ul>
        </Slide>
        <Slide title="🚂" subtitle="P'tit train va loin">
          <ul>
            <li>Approche itérative</li>
          </ul>
        </Slide>
        <Slide title="🐢" subtitle="Oops...">
          <ul>
            <li>Plus plus de React / TypeScript</li>
            <li>&darr;</li>
            <li>Plus en plus lent</li>
          </ul>
        </Slide>
        <Slide title="1️⃣" subtitle="Remplacer">
          <ul>
            <li>ts-node</li>
            <li>&darr;</li>
            <li>esbuild-runner</li>
          </ul>
          <Reference href="https://github.com/folke/esbuild-runner" />
          <Reference href="https://typestrong.org/ts-node/docs/swc/" />
        </Slide>
        <Slide title="🏢" subtitle="Serveur">
          <ul>
            <li>~25 secondes &rarr; ~5 secondes</li>
          </ul>
        </Slide>
        <Slide title="2️⃣" subtitle="webpack 5.x">
          <code>npm install (webpack and friends)@latest</code>
          <Reference href="https://webpack.js.org/migrate/5/" />
        </Slide>
        <Slide title="3️⃣" subtitle="Asset modules">
          <ul>
            <li>use: file-loader &rarr; type: asset/resource</li>
            <li>use: raw-loader &rarr; type: asset/source</li>
            <li>use: url-loader &rarr; type: asset/inline</li>
          </ul>
          <Reference href="https://webpack.js.org/guides/asset-modules/" />
        </Slide>
        <Slide title="⚙️" subtitle="Asset modules">
          <code>npm uninstall file-loader raw-loader url-loader</code>
        </Slide>
        <Slide title="⚙️" subtitle={'type: "asset/resource"'}>
          <code>import trends from "./trends.png";</code>
          &darr;
          <code>{"<img src={trends} />"}</code>
          &darr;
          <code>{`<img src="${trends}" />`}</code>
        </Slide>
        <Slide title="⚙️" subtitle={'type: "asset/inline"'}>
          <code>import focus_par_telus from "./focus_par_telus.png";</code>
          &darr;
          <code>{"<img src={focus_par_telus} />"}</code>
          &darr;
          <code className="flex max-w-full whitespace-nowrap">
            {'<img src="'}
            <span className="truncate">{focus_par_telus}</span>
            {'" />'}
          </code>
        </Slide>
        <Slide title="🪄" subtitle={'type: "asset"'}>
          <ul>
            <li>{"< 8 KB"} &rarr; asset/inline</li>
            <li>{">= 8 KB"} &rarr; asset/resource</li>
          </ul>
        </Slide>
        <Slide title="📄" subtitle={'type="asset/source"'}>
          <code>import patate from "./patate.txt";</code>
          &darr;
          <code>{patate}</code>
        </Slide>
        <Slide title="4️⃣" subtitle="Compiler / Transpiler">
          <ul>
            <li>babel &rarr; swc</li>
            <li>JavaScript &rarr; Rust</li>
          </ul>
        </Slide>
        <Slide title="⚙️" subtitle="Compiler / Transpiler">
          <code>npm uninstall @babel/* babel-loader ts-loader</code>
          <code>npm install @swc/core swc-loader</code>
        </Slide>
        <Slide title="⚙️" subtitle="Compiler / Transpiler">
          <ul>
            <li>use: ["babel-loader", "ts-loader"] &rarr; use: "swc-loader"</li>
            <li>.babelrc &rarr; .swcrc</li>
          </ul>
        </Slide>
        <Slide title="🏢" subtitle="Client">
          <ul>
            <li>file/url-loader &rarr; Asset modules: ~10%</li>
            <li>babel &rarr; SWC: ~40%</li>
          </ul>
        </Slide>
        <Slide title="🔥" subtitle="Hot Module Replacement">
          <ul>
            <li>webpack-dev-server &rarr; devServer.hot: true</li>
            <li>webpack-dev-middleware + webpack-hot-middleware</li>
          </ul>
        </Slide>
        <Slide title="🌈" subtitle="React Refresh">
          <ul>
            <li>npm install --save-dev @pmmmwh/react-refresh-webpack-plugin</li>
            <li>plugins: [new ReactRefreshWebpackPlugin()]</li>
          </ul>
        </Slide>
        <Slide title="😴" subtitle="Lazy compilation">
          <ul>
            <li>HMR</li>
            <li>HTTP2 (SSE: server-sent events)</li>
          </ul>
          <Reference href="https://webpack.js.org/configuration/experiments/#experimentslazycompilation" />
          <Reference href="https://github.com/webpack/webpack/pull/12469" />
        </Slide>
        <Slide title="⚙️" subtitle="Lazy compilation">
          <code>experiments.lazyCompilation: true</code>
          <code>output.publicPath: "/"</code>
        </Slide>
        <Slide title="⚙️" subtitle="Dynamic imports">
          <pre>
            <code>{`import package from "package";`}</code>
          </pre>
          &darr;
          <pre>
            <code>{`const package = await import("package");`}</code>
          </pre>
        </Slide>
        <Slide title="⚙️" subtitle="Lazy components">
          <pre>
            <code>
              {`import Component from "./Component";`}
              {`\n<Component />`}
            </code>
          </pre>
          &darr;
          <pre>
            <code>
              {`const Component = React.lazy(() => import("./Component"));`}
              {`\n<Suspense fallback={null}><Component /><Suspense>`}
            </code>
          </pre>
        </Slide>
        <Slide title="÷" subtitle="Comment segmenter?">
          <ul>
            <li>Page &rarr; react-router</li>
            <li>Dépendances à usage unique</li>
          </ul>
        </Slide>
        <Slide title="🎨" subtitle="CSS">
          <ul>
            <li>postcss-loader</li>
            <li>&darr;</li>
            <li>lightningcss-loader</li>
          </ul>
        </Slide>
        <Slide title="🤔" subtitle="Questions?">
          <ul>
            <li className="text-xs">
              (Réponse: <i>ça dépend</i>)
            </li>
          </ul>
        </Slide>
        <Slide title="🕸️">
          https://github.com/Zertz/react-webpack-typescript-sont-nuisibles
        </Slide>
      </div>
    </div>
  );
}

function Slide({
  title,
  subtitle,
  children,
  hints,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  hints?: string[];
}) {
  return (
    <section className="!flex flex-col gap-4">
      <h1 className={title.length <= 2 ? "text-[96px]" : "text-4xl"}>
        {title}
      </h1>
      {subtitle && <h2 className="text-3xl">{subtitle}</h2>}
      {children && (
        <div className="flex flex-col gap-1 text-xl">{children}</div>
      )}
      {hints && (
        <ul className="mt-auto flex flex-col text-gray-500">
          {hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Reference({ href }: { href: string }) {
  return (
    <a className="text-sm underline" href={href}>
      {href}
    </a>
  );
}
