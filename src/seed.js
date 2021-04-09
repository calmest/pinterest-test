export function seedDatabase(firebase) {
    function getUUID() {
        // eslint gets funny about bitwise
        /* eslint-disable */
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const piece = (Math.random() * 16) | 0;
            const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
            return elem.toString(16);
        });
        /* eslint-enable */
    }

    /* Design
      ============================================ */
    // 1
    firebase.firestore().collection('design').add({
        id: getUUID(),
        title: 'Esther Obrien',
        user: 'Lloyd Young',
        like: '1',
        comment: '2',
        slug: 'design-esther-obrien',
    });
    
    // 2
    firebase.firestore().collection('design').add({
        id: getUUID(),
        title: 'Mamie Grant',
        user: 'Gregory Cannon',
        like: '0',
        comment: '1',
        slug: 'design-mamie-grant',
    });

    // 3
    firebase.firestore().collection('design').add({
        id: getUUID(),
        title: 'Leila Bowen',
        user: 'Gregory Cannon',
        like: '1',
        comment: '0',
        slug: 'design-leila-bowen',
    });
    
    // 4
    firebase.firestore().collection('design').add({
        id: getUUID(),
        title: 'Brett Lambert',
        user: 'Lloyd Young',
        like: '1',
        comment: '2',
        slug: 'design-brett-lambert',
    });
    
    // 5
    firebase.firestore().collection('design').add({
        id: getUUID(),
        title: 'Clifford Walker',
        user: 'Gregory Cannon',
        like: '1',
        comment: '2',
        slug: 'design-clifford-walker',
    });
    
    /* HR
      ============================================ */
    // 1
    firebase.firestore().collection('hr').add({
        id: getUUID(),
        title: 'Esther Obrien',
        user: 'Lloyd Young',
        like: '1',
        comment: '2',
        slug: 'hr-esther-obrien',
    });
    
    // 2
    firebase.firestore().collection('hr').add({
        id: getUUID(),
        title: 'Mamie Grant',
        user: 'Gregory Cannon',
        like: '0',
        comment: '1',
        slug: 'hr-mamie-grant',
    });
    
    // 3
    firebase.firestore().collection('hr').add({
        id: getUUID(),
        title: 'Leila Bowen',
        user: 'Gregory Cannon',
        like: '1',
        comment: '0',
        slug: 'hr-leila-bowen',
    });
    
    // 4
    firebase.firestore().collection('hr').add({
        id: getUUID(),
        title: 'Brett Lambert',
        user: 'Lloyd Young',
        like: '1',
        comment: '2',
        slug: 'hr-brett-lambert',
    });
    
    // 5
    firebase.firestore().collection('hr').add({
        id: getUUID(),
        title: 'Clifford Walker',
        user: 'Gregory Cannon',
        like: '1',
        comment: '2',
        slug: 'hr-clifford-walker',
    });


    /* Develop
      ============================================ */
    // 1
    firebase.firestore().collection('develop').add({
        id: getUUID(),
        title: 'Esther Obrien',
        user: 'Lloyd Young',
        like: '1',
        comment: '2',
        slug: 'develop-esther-obrien',
    });
    
    // 2
    firebase.firestore().collection('develop').add({
        id: getUUID(),
        title: 'Mamie Grant',
        user: 'Gregory Cannon',
        like: '0',
        comment: '1',
        slug: 'develop-mamie-grant',
    });
    
    // 3
    firebase.firestore().collection('develop').add({
        id: getUUID(),
        title: 'Leila Bowen',
        user: 'Gregory Cannon',
        like: '1',
        comment: '0',
        slug: 'develop-leila-bowen',
    });
    
    // 4
    firebase.firestore().collection('develop').add({
        id: getUUID(),
        title: 'Brett Lambert',
        user: 'Lloyd Young',
        like: '1',
        comment: '2',
        slug: 'develop-brett-lambert',
    });
    
    // 5
    firebase.firestore().collection('develop').add({
        id: getUUID(),
        title: 'Clifford Walker',
        user: 'Gregory Cannon',
        like: '1',
        comment: '2',
        slug: 'develop-clifford-walker',
    });
}