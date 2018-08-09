const pageList = {
  'code': 200,
  data: {
    'depart': '@cword(3, 5)',
    'type': '@first',
    'name': '@csentence(5)',
    'engnames': '@last()',
    'desc': '@cparagraph(2)',
    'master': '@first',
    'group': '@csentence(3, 5)',
    'userNo': '@cparagraph',
    'note': '@sentence(3, 5)'
  }
}
export default pageList
