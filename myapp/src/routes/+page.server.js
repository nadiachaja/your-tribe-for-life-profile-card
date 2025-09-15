export async function load({url}){
    const membersResponse= await fetch('https://fdnd.directus.app/items/person/162')
    const memberData = await membersResponse.json();

    return {member: memberData.data};
}
