(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/opendoc-sensor-data-exchange/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["",null,null]
            },
            
        {
                name: "index.md",
                title: "This is a Document Title",
                url: "/opendoc-sensor-data-exchange/Document%201/",
                escapedPath: "Document%201/index.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        {
                name: "index.md",
                title: "Test Document",
                url: "/opendoc-sensor-data-exchange/AA%20Document%202/",
                escapedPath: "AA%20Document%202/index.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["Aa document 2",null,null]
            },
            
        {
                name: "sample.md",
                title: "Sample page",
                url: "/opendoc-sensor-data-exchange/sample.html",
                escapedPath: "sample.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["",null,null]
            },
            
        
        
        {
                name: "page1.md",
                title: "Prospiciunt morti 1",
                url: "/opendoc-sensor-data-exchange/AA%20Document%202/page1.html",
                escapedPath: "AA%20Document%202/page1.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["Aa document 2",null,null]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/opendoc-sensor-data-exchange/AA%20Document%202/page2.html",
                escapedPath: "AA%20Document%202/page2.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["Aa document 2",null,null]
            },
            
        {
                name: "page1.md",
                title: "Prospiciunt morti 1",
                url: "/opendoc-sensor-data-exchange/Document%201/page1.html",
                escapedPath: "Document%201/page1.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/opendoc-sensor-data-exchange/Document%201/page2.html",
                escapedPath: "Document%201/page2.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1",null,null]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()