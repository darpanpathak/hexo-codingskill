$(document).ready(() => {

    // this line make sure that gist will open in new tab
    $('.gist-meta').find('a').attr('target', '_blank');

    //handle click/selected from search
    const $suggestionBox = $('.cs-auto-complete ul');
    $suggestionBox.click((e) => {
        const url = e.target.getAttribute('data-url');

        if (url) {
            window.location.assign(url);
        }
    });

});

//search box
function doSearch(path, searchTerm) {
    $.ajax({
        url: path,
        dataType: path.split('.').pop() || "xml",
        success: function (response) {
            searchComplete(response, searchTerm);
        },
        error: (err) => searchError(err)
    });
}

function searchComplete(data, searchTerm) {
    if (data && data.length > 0) {

        const keywords = searchTerm.toLowerCase().split(/[\s\-]+/);
        const $suggestionBox = $('.cs-auto-complete ul');
        $suggestionBox.parent().css('display', 'block');

        let numberOfPostFound = 0;

        data.forEach((item) => {

            const item_title = item.title.toLowerCase();
            const item_content = item.content.toLowerCase();


            let isFound = false;
            for (let kw of keywords) {
                if (item_title.indexOf(kw) > -1) {
                    isFound = true;
                    break;
                } else if (item_content.indexOf(kw) > -1) {
                    isFound = true;
                    break;
                }
            }

            if (isFound) {
                numberOfPostFound++;
                $suggestionBox.append(`<li data-url="${item.url}">${item.title}</li>`);
            }

        });

        if (!numberOfPostFound) {
            $suggestionBox.append(`<li> No post found </li>`);
        }


    }
}

function searchError(err) {
    console.log(err);
}