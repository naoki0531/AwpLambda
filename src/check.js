module.exports = (event, context) => {
    console.log('チェック処理を開始します。');
    const msg = JSON.parse(event.Records[0].Sns.Message);
    console.log(msg);
    
    const branchName = msg.ref;
    console.log('msg.refの値は' + branchName);
    
    let filePath = '';
    console.log('msg.head_commit.addedの値は' + msg.head_commit.added);
    console.log('msg.head_commit.addedの要素数は' + msg.head_commit.added.length);
    
    if ( branchName === 'refs/heads/master' && msg.head_commit.added.length > 0) {
        console.log('マスターに対するPUSHのため、ファイル名取得処理を開始します。');
        filePath = msg.head_commit.added;
        console.log('getFile.jsにファイルパス[' + filePath + ']を送ります。');
        
    } else {
        console.log('ブランチ名：[' + branchName + ']に対するPUSHまたは変更に対するマージのため、ファイル名送信を行わず処理を終了します。');
    }

    return filePath;
};
