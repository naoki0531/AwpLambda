exports.handler = function (event, context) {
    console.log('�`�F�b�N�������J�n���܂��B');
    const msg = JSON.parse(event.Records[0].Sns.Message);
    console.log(msg);
    
    const branchName = msg.ref;
    console.log('msg.ref�̒l��' + branchName);
    
    var fileName = '';
    console.log('msg.head_commit.added�̒l��' + msg.head_commit.added);
    console.log('msg.head_commit.added�̗v�f����' + msg.head_commit.added.length);
    
    if ( branchName == 'refs/heads/master' && msg.head_commit.added.length > 0) {
        console.log('�}�X�^�[�ɑ΂���PUSH�̂��߁A�t�@�C�����擾�������J�n���܂��B');
        fileName = msg.head_commit.added;
        return fileName;
        
    } else {
        console.log('�u�����`���F[' + branchName + ']�ɑ΂���PUSH�܂��͕ύX�ɑ΂���}�[�W�̂��߁A�t�@�C�������M���s�킸�������I�����܂��B');
    }
};