<template>
  <div>
    <div
      v-if="!mainSlider"
      class="d-flex align-items-center justify-content-center"
      style="min-height: 60vh"
    >
      <video
        autoplay
        loop
        muted
        playsinline
        src="~/assets/images/main-loader.webm"
        alt=""
        style="width: 100px; height: 100px"
      />
    </div>

    <ClientOnly>
      <div
        v-if="mainSlider"
        v-html="mainSlider"
        style="margin-top: 80px; direction: ltr"
      ></div>
    </ClientOnly>
  </div>
</template>

<script>
import axios from "axios";

export default {
  client: true,

  setup() {
    const { locale } = useI18n();
    let lang = ref(locale);
    let pending = ref(false);
    let url = getUrl();
    let mainSlider = ref("");
    // const jsFiles = ref([]);
    // const cssFiles = ref([]);

    useHead({
      script: [
        // {
        //   src: "/jquery.js",
        // },
        // {
        //   innerHTML: `
        //   var $ = jQuery.noConflict();
        //   // let locale = "ar";
        //   // let imagesBasePath = "https://altamwean.com/public/storage/Images";
        // `,
        //   type: "text/javascript",
        // },
        // {
        //   src: "https://test-slider.webstdy.net/revslider/public/assets/js/jquery.themepunch.tools.min.js",
        // },
        // {
        //   src: "https://test-slider.webstdy.net/revslider/public/assets/js/jquery.themepunch.revolution.min.js",
        // },
      ],
      link: [
        // {
        //   rel: "stylesheet",
        //   href: "https://test-slider.webstdy.net/revslider/public/assets/css/settings.css",
        //   type: "text/css",
        //   media:"all"
        // },
      ],
    });

    const getSlider = async () => {
      // eval("var $ = jQuery.noConflict();");
      try {
        const htmlContent = await axios.get(
          "https://test-slider.webstdy.net/RevSliderEmbedderheadIncludes.php"
        );

        console.log(htmlContent.data);

        //   // Step 2: Extract the JS and CSS file URLs

        //   const doc = document.implementation.createHTMLDocument();
        //   doc.documentElement.innerHTML = htmlContent.data;

        //  const jsFiles = Array.from(
        //     doc.querySelectorAll("script[src]"),
        //     (script) => script.src
        //   );
        //  const cssFiles = Array.from(
        //     doc.querySelectorAll('link[rel="stylesheet"][href]'),
        //     (link) => link.href
        //   );

        //   setTimeout(() => {
        //     // useHead({
        //     //   script: jsFiles.map((src) => ({ src, body: true, })),
        //     //   link: cssFiles.map((href) => ({ rel: "stylesheet", href })),
        //     // });

        //   }, 200);

        // Step 4: Fetch additional content

        const additionalContent = await axios.get(
          `https://test-slider.webstdy.net/RevSliderEmbedderputRevSlider.php?slide=alkathiri_${
            lang.value == "ar" ? "ar" : "ar"
          }`
        );
        // Step 5: Extract script tags
        if (additionalContent.status == 200) {
          const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
          const scriptTags = (
            additionalContent.data.match(scriptTagRegex) || []
          ).join("");

          let AllscriptTags = scriptTags.match(
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
          );
          var combinedContent = "";
          if (AllscriptTags) {
            for (var i = 0; i < AllscriptTags.length; i++) {
              var content = AllscriptTags[i].replace(/<\/?script[^>]*>/g, "");
              combinedContent += content;
            }
          }

          // Step 6: Remove script tags from the content
          const removedScripts = additionalContent.data.replace(
            scriptTagRegex,
            ""
          );

          // Step 7: Extract link tags
          const linkTags = removedScripts.match(/<link\b[^>]*>/gm) || [];
          const linkFiles = linkTags.map((tag) => {
            const linkDoc = document.implementation.createHTMLDocument();
            linkDoc.documentElement.innerHTML = tag;
            return linkDoc.querySelector('link[rel="stylesheet"][href]').href;
          });

          // Step 8: Remove link tags from the content
          const sanitizedData = removedScripts.replace(/<link\b[^>]*>/gm, "");

          // Step 9: Append link files to the <head> section using useHead
          useHead(
            {
              link: linkFiles.map((href) => ({
                href,
                rel: "stylesheet",
                property: "stylesheet",
                type: "text/css",
                media: "all",
              })),
            },
            { once: true }
          );

          //add the content to the variable

          if (combinedContent != "") {
            const script = document.createElement("script");

            mainSlider.value = sanitizedData;
            setTimeout(() => {}, 400);
            script.innerHTML = combinedContent;
            setTimeout(() => {
              eval(combinedContent);
              // document.body.appendChild(script);
            }, 100);
          }
        }
      } catch (error) {
        console.error("Error fetching or processing slider data:", error);
      }
    };

    onMounted(() => {
      //getSripts();
      console.log("mounttt");
      setTimeout(() => {
      }, 500);
      // getSlider();
      
    });
    return { mainSlider };
  },
};
</script>

<style lang="scss"></style>
