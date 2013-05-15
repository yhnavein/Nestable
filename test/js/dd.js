/**
 * @author ramondonnell
 * @since 13/05/13
 */

$(function(){
    $('#nestable').nestable({
        scroll: true,
        maxDepth: 10
    })
        .on('dropChange', function(e, details){
            $('#changed').text('moved:' + details.sourceId + ', parent:' + details.destParentId + ', above:' + details.prevSiblingId);
        });

    var idStart = 13;

    $('#add').click(function(){
        $('#nestable ol:first-child')
                .append($('<li>').attr('class', 'dd-item').attr('data-id', idStart)
                        .append($('<div>').attr('class', 'dd-handle'))
                            .append($('<div>').attr('class', 'dd-content')
                                .append('Hello ' + idStart)
            ));
        idStart++;
    });
});