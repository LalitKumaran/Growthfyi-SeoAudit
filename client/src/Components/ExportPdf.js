import { PDFDocument, rgb } from "pdf-lib";
import "./styles/resultpage_styles.css";

export const ExportPdf = ({ result }) => {
  const generatePDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595,842]);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    page.drawText(`URL: ${result.url}`, {
      x: 50,
      y: 800,
      size: 14,
      color: rgb(0, 0, 0),
    });

    page.drawText("Generated Date and Time:", {
      x: 50,
      y: 780,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(formattedDate, {
      x: 220,
      y: 780,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(`On_page Score: ${result.onpage_score}`, {
      x: 50,
      y: 740,
      size: 14,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Internal Links: ${result.internal_links_count}`, {
      x: 50,
      y: 720,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(`External Links: ${result.external_links_count}`, {
      x: 50,
      y: 700,
      size: 12,
      color: rgb(0, 0, 0),
    });
    
    page.drawText(`Number of Images: ${result.images_count}`, {
        x: 50,
        y: 680,
        size: 12,
        color: rgb(0, 0, 0),
      });

      page.drawText(`Image Size: ${result.images_size}`, {
        x: 50,
        y: 660,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Script: ${result.scripts_count}`, {
        x: 50,
        y: 640,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Script Size: ${result.scripts_size}`, {
        x: 50,
        y: 620,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Plain Text Rate: ${result.plain_text_rate}`, {
        x: 50,
        y: 600,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Plain Text Size: ${result.plain_text_size}`, {
        x: 50,
        y: 580,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Plain Text Word Count: ${result.plain_text_word_count}`, {
        x: 50,
        y: 560,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Automated Readability Index: ${result.automated_readability_index}`, {
        x: 50,
        y: 520,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Coleman Liau Readability Index: ${result.coleman_liau_readability_index}`, {
        x: 50,
        y: 500,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Dale Chall Readability Index: ${result.dale_chall_readability_index}`, {
        x: 50,
        y: 480,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Flesch Kincaid Readability Index: ${result.flesch_kincaid_readability_index}`, {
        x: 50,
        y: 460,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Smog Readability Index: ${result.smog_readability_index}`, {
        x: 50,
        y: 440,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Description to Content Consistency: ${result.description_to_content_consistency}`, {
        x: 50,
        y: 420,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Title to Content Consistency: ${result.title_to_content_consistency}`, {
        x: 50,
        y: 400,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Time to Secure Connection: ${result.time_to_secure_connection}ms`, {
        x: 50,
        y: 360,
        size: 12,
        color: rgb(0, 0, 0),
      });

      page.drawText(`Waiting Time: ${result.waiting_time}ms`, {
        x: 50,
        y: 340,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Download Time: ${result.download_time}ms`, {
        x: 50,
        y: 320,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Time to Interactive: ${result.time_to_interactive}ms`, {
        x: 50,
        y: 300,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`DOM Complete: ${result.dom_complete}ms`, {
        x: 50,
        y: 280,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Largest Contentful Paint: ${result.largest_contentful_paint}ms`, {
        x: 50,
        y: 260,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Duration Time: ${result.duration_time}ms`, {
        x: 50,
        y: 240,
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(`Connection Time: ${result.connection_time}ms`, {
        x: 50,
        y: 220,
        size: 12,
        color: rgb(0, 0, 0),
      });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${result.url.replace(/^(https?:\/\/)?(www\.)?/, "")}.pdf`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={generatePDF} id="export-button">
        Export PDF
      </button>
    </div>
  );
};
