import "./styles/resultpage_styles.css";
import { ProgressBar } from "./Utils/ProgressBar";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { ExportPdf } from "./ExportPdf";

export function ResultPage({ result }) {
  return (
    <div className="resultPage">
      <h4>EveryThing You Need to Know</h4>
      <h4>
        <strong>
          <u>{result.url}</u>
        </strong>
      </h4>
      <br />
      <ExportPdf result={result}/>
      <br />
      <div className="container m-4">
        <div className="row justify-content-center">
          <div id="onpage-score">
            <ProgressBar progress={result.onpage_score} />
            <p>Onpage Score</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-3 col-md-6 col-lg-3 mx-0">
            <div className="box-contents">
              <p className="values">{result.internal_links_count}</p>
              <p>Internal Links</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.external_links_count}</p>
              <p>External Links</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.images_count}</p>
              <p>Number of Images</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.images_size}</p>
              <p>Image Size</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.scripts_count}</p>
              <p>Script</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.scripts_size}</p>
              <p>Script Size</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.plain_text_size}</p>
              <p>Plain Text Size</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.plain_text_rate}</p>
              <p>Plain Text Rate</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.plain_text_word_count}</p>
              <p>Plain Text Word Count</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.automated_readability_index}</p>
              <p>Automated Readability Index</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.coleman_liau_readability_index}</p>
              <p>Coleman Liau Readability Index</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.dale_chall_readability_index}</p>
              <p>Dale Chall Readability Index</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.flesch_kincaid_readability_index}</p>
              <p>Flesch Kincaid Readability Index</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.smog_readability_index}</p>
              <p>Smog Readability Index</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.description_to_content_consistency}</p>
              <p>Description to Content Consistency</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.title_to_content_consistency}</p>
              <p>Title to Content Consistency</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="checkbox-contents">
              <p className="title">Duplicate Title</p>
              <p className="description">
                Duplicate title tags are bad for SEO. They confuse search
                engines and make it harder to rank for specific keywords.
              </p>
              { !result.duplicate_title ? (
                <GiConfirmed className="text-success" />
              ) : (
                <MdCancel className="text-danger" />
              )}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="checkbox-contents">
              <p className="title">Duplicate Description</p>
              <p className="description">
                Duplicate meta descriptions are bad for SEO. They confuse search
                engines and make it harder to rank for specific keywords.
              </p>
              { !result.duplicate_description ? (
                <GiConfirmed className="text-success" />
              ) : (
                <MdCancel className="text-danger" />
              )}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="checkbox-contents">
              <p className="title">Duplicate Content</p>
              <p className="description">
                Duplicate content is bad for SEO. It confuses search engines and
                makes it harder to rank for specific keywords.
              </p>
              { !result.duplicate_content ? (
                <GiConfirmed className="text-success" />
              ) : (
                <MdCancel className="text-danger" />
              )}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="checkbox-contents">
              <p className="title">Size</p>
              <p className="description">
                The size of your page is too large. This can negatively impact
                your page load speed and user experience.
              </p>
              { result.size ? (
                <GiConfirmed className="text-success" />
              ) : (
                <MdCancel className="text-danger" />
              )}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="checkbox-contents">
              <p className="title">Cache Control</p>
              <p className="description">
                Your page does not have a cache control header. This can
                negatively impact your page load speed and user experience.
              </p>
              { result.cache_control ? (
                <GiConfirmed className="text-success" />
              ) : (
                <MdCancel className="text-danger" />
              )}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="checkbox-contents">
              <p className="title">Seo Friendly Url</p>
              <p className="description">
              These checks ensure that your page is following basic search engine optimization advice
              </p>
              { result.seo_friendly_url ? (
                <GiConfirmed className="text-success" />
              ) : (
                <MdCancel className="text-danger" />
              )}
            </div>
          </div>
        </div>
      </div>
      <h4 className="m-2"><u><b>Speed Insights</b></u></h4>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.time_to_secure_connection}ms</p>
              <p>Time to Secure Connection</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.waiting_time}ms</p>
              <p>Waiting Time</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.download_time}ms</p>
              <p>Download Time</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.time_to_interactive}ms</p>
              <p>Time to Interactive</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.dom_complete}ms</p>
              <p>DOM Complete</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.largest_contentful_paint}ms</p>
              <p>Largest Contentful Paint</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.duration_time}ms</p>
              <p>Duration Time</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box-contents">
              <p className="values">{result.connection_time}ms</p>
              <p>Connection Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
