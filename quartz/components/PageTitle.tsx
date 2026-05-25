import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"


const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logo = "https://github.com/rekceq/rekceq/blob/v4/content/images/logo0.png?raw=true"
  
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} target="_blank" rel="noreferrer">
        <img src= {logo} />
      </a>

      <a href={baseDir}>{title}</a>

    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
